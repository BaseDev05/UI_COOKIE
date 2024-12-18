// import { DEFAULT_TOKEN_DECIMAL,  } from 'config'
import { BIG_ZERO } from 'utils/bigNumber'
// import { useSelector } from 'react-redux'
// import { getPoolApr, getFarmApr } from 'utils/apr'
import { getBalanceNumber } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import getKingdomAPRAPY from 'utils/getKingdomAPRAPY'

const useTotalStaked = (farms: any, cakePrice: BigNumber, bakePrice: BigNumber, beltPrice: BigNumber, CookieDen: any) => {
  let rawTotalCookie = BIG_ZERO
  let rawTotalStakedUSD = BIG_ZERO
  let rawTotalAPY = 0
  let rawTotalDailyAPR = 0
  let count = 0
  farms.forEach((farm) => {
    if (farm.isKingdom) {
      const { userData, lpTotalInQuoteTokenPCS = 0, lpTokenBalancePCS = 0, quoteToken: { busdPrice: quoteTokenPriceUsd }, token: { busdPrice: tokenPrice }} = farm
      const { stakedBalance, earnings } = userData

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const aprApy = getKingdomAPRAPY(farm, cakePrice, bakePrice, beltPrice, CookieDen)

      if (stakedBalance > '1') {
        let oneTokenQuoteValue = BIG_ZERO

        if (!farm.isKingdomToken)
          oneTokenQuoteValue = lpTotalInQuoteTokenPCS ? new BigNumber(lpTotalInQuoteTokenPCS).div(new BigNumber(lpTokenBalancePCS)).times(quoteTokenPriceUsd) : new BigNumber(0)
        else oneTokenQuoteValue = farm.farmType !== 'Belt' ? tokenPrice : new BigNumber(farm.token.busdPrice)

        const depositBalanceQuoteValue = stakedBalance ? new BigNumber(stakedBalance).times(oneTokenQuoteValue) : new BigNumber(0)

        rawTotalStakedUSD = rawTotalStakedUSD.plus(new BigNumber(depositBalanceQuoteValue))

        rawTotalAPY = +rawTotalAPY + +aprApy.totalAPY
        rawTotalDailyAPR = +rawTotalDailyAPR + +aprApy.dailyAPR

        count += 1
      }

      if (earnings !== '0') rawTotalCookie = rawTotalCookie.plus(new BigNumber(earnings))
    }
  })

  const stakedUSD = rawTotalStakedUSD !== BIG_ZERO ? getBalanceNumber(rawTotalStakedUSD) : 0

  const CookieEarned = rawTotalCookie !== BIG_ZERO ? getBalanceNumber(rawTotalCookie) : 0

  const CookieBusd = CookieEarned ? new BigNumber(CookieEarned).multipliedBy(cakePrice).toNumber() : 0

  return [stakedUSD, CookieEarned, CookieBusd, rawTotalAPY, rawTotalDailyAPR, count]
}

export default useTotalStaked

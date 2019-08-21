import { v1Client } from '../apollo/client'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { getPercentChange, get2DayPercentChange } from '../utils'
import { V1_DATA_QUERY } from '../apollo/queries'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(utc)
dayjs.extend(weekOfYear)

      variables: {
        date: utcOneDayBack,
        date2: utcTwoDaysBack,
      },
      fetchPolicy: 'cache-first',
    })

    let data = result.data.current
    let oneDayData = result.data.oneDay[0]
    let twoDayData = result.data.twoDay[0]

    let [volumeChangeUSD, volumePercentChangeUSD] = get2DayPercentChange(
      data.totalVolumeUSD,
      oneDayData.totalVolumeUSD,
      twoDayData.totalVolumeUSD
    )

    let [txCountChange, txCountPercentChange] = get2DayPercentChange(
      data.txCount,
      oneDayData.txCount,
      twoDayData.txCount
    )

    // regular percent changes
    let liquidityPercentChangeUSD = getPercentChange(data.liquidityUsd, oneDayData.liquidityUsd)

    data.liquidityPercentChangeUSD = liquidityPercentChangeUSD
    data.volumePercentChangeUSD = volumePercentChangeUSD
    data.txCount = txCountChange
    data.txCountPercentChange = txCountPercentChange
    data.dailyVolumeUSD = volumeChangeUSD

    return data
  } catch (err) {
    console.log('error: ', err)
  }
}

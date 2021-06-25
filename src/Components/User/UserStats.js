import React from 'react'
import Head from '../Helper/Head'
import useFetch from '../../Hooks/useFetch'
import {STATS_GET} from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import UserStatsGraphs from './UserStatsGraphs'

const UserStats = () => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    const token = window.localStorage.getItem('token')
    async function getData() {
      const { url, options } = STATS_GET(token)
      await request(url, options)
    }
    getData()
  },[request])

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data)
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null
}

export default UserStats

import React from 'react'
import styles from './PhotoDelete.module.css'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_DELETE } from '../../api'

const PhotoDelete = ({id}) => {
  const token = window.localStorage.getItem('token')
  const { loading, request } = useFetch()

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja excluir a postagem?')
    if(confirm) {
      const { url, options } = PHOTO_DELETE(id, token)
      const { response } = await request(url, options)
      if(response.ok) window.location.reload()
    }
  }
  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>Deletar</button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>Deletar</button>
      )}
    </>
  )
}

export default PhotoDelete

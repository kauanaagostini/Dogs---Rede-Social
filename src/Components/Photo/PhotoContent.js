import React from 'react'
import styles from './PhotoContent.module.css'
import {Link} from 'react-router-dom'
import PhotoComments from './PhotoComments'

const PhotoContent = ({data}) => {
  const {photo, comments} = data

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.source} alt={photo.title}/>
      </div>
      <div className={styles.details}>
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso}</li>
            <li>{photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={photo.comments}/>
    </div>
  )
}

export default PhotoContent

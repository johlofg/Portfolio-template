import {React, useState} from 'react'
import ImageUploading from 'react-images-uploading'

const ImageUpload = (props) => {
  const [images, setImages] = useState([])
  const maxNumber = 69

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex)
    setImages(imageList) 
    props.func(imageList.data_url)
  } 
  
  
  return (
<>
    <ImageUploading      
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey='data_url'
      >
      {({
        imageList,
        onImageUpload,        
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <div className='upload__image-wrapper'>

          <button
            style={isDragging ? {color: 'red'} : undefined}
            onClick={onImageUpload}
            {...dragProps}
            >
            Click or drop here  
            </button> 
            {imageList.map((image, index) => (
              <div key={index} className='image-item'>
                <img src={image['data_url']} alt='' width='40' />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
        </div>
      )}      
    </ImageUploading>
</>
  )
}

export default ImageUpload
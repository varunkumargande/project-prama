import React from 'react'
import { RichText } from 'prismic-reactjs'
import Image from 'next/image'

const TextImageRight = ({ slice }) => (
  <section className={`pt-0 ${slice.variation}`}>
    <div className="top-title">
      {slice.variation === 'titleImage' ? (
        <RichText render={slice.primary.title} />
      ) : null}
    </div>
    <div className={slice.variation !== 'default-slice' ? `image-desc` : `overlay-image`} >
      {slice.variation !== 'titleImage' ? (
        <RichText render={slice.primary.textField} />
      ) : null}
    </div>
    <div>
    {slice.variation !== 'default-slice' ? (
      <Image src={slice.primary.image.url} alt={slice.primary.image.alt} width={200} height={100} objectFit="contain" unoptimized/>
      ) : (
      <Image src={slice.primary.image.url} alt={slice.primary.image.alt} layout='fill' objectFit="contain" unoptimized/>
      ) }
    </div>
    <style jsx global>{`
      .default-slice {
        flex-direction: row;
        height: 130px;
        display: flex;
      }
      .textImageLeft {
        flex-direction: row-reverse;
        height: 130px;
        display: flex;
      }
      .titleImage {
        flex-direction: column;
        text-align: center;
      }
      .top-title {
        text-align: center;
      }
      .image-desc {
        padding: 2% 5%;
        width: 80%;
      }
      .overlay-image {
        margin: 0px auto;
        text-align: center;
        z-index: 3;
      }
      .pt-0 {
        padding-top: 0px;
      }
    `}</style>
  </section>
)

export default TextImageRight
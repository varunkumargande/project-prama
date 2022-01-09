import React from 'react'
import { RichText } from 'prismic-reactjs'
import Image from 'next/image'

import Card from 'react-bootstrap/Card'

const TextImageRight = ({ slice }) => (
  <section className={`pt-0 col-12 ${slice.variation}`}>
    {slice.variation !== 'default-slice' ?
      <React.Fragment>
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
          <Image src={slice.primary.image.url} alt={slice.primary.image.alt} width={1000} objectFit="contain" unoptimized/>
        </div>
      </React.Fragment>
      :
      <Card className="bg-dark text-white text-center m-auto">
        <Card.Img src={slice.primary.image.url} alt={slice.primary.image.alt} style={{ height: `600px`, width: `600px` }} />
        <Card.ImgOverlay>
          <Card.Text>
            {slice.variation !== 'titleImage' ? (
            <RichText render={slice.primary.textField} />
          ) : null}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    }
    <style jsx global>{`
      .default-slice {
        flex-direction: row;
        display: flex;
      }
      .textImageLeft {
        flex-direction: row-reverse;
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
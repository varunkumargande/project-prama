import React from 'react'
import { RichText } from 'prismic-reactjs'

const RichTextModule = ({ slice }) => (
  <section className={`col-12`}>
    <div className="title text-capitalize">
      { slice?.items?.map((item, i) => <RichText render={item.richtext} />) }
    </div>
    <style jsx>{`
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default RichTextModule
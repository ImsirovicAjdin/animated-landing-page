import React from 'react'

function TextOverMainBackground() {
  return (
    <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1
                  className="text-white font-semibold text-5xl"
                  data-aos="fade-up"
                >
                  Welcome.
                </h1>
                <p
                  className="mt-4 text-lg text-gray-300"
                  data-aos="fade-right"
                  data-aos-delay="1000"
                >
                  Lorem ipsum dolor sit. Eum totam aspernatur aliquam
                  praesentium aperiam magni, dignissimos, atque incidunt fuga
                  nulla distinctio eligendi enim placeat nesciunt, soluta maxime
                  nihil ipsa minus!
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export {TextOverMainBackground}
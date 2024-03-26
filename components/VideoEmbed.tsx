import React from 'react'

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="youtube-mdx-embed relative my-6 w-full" style={{ paddingTop: '56.25%' }}>
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}

export default YoutubeEmbed

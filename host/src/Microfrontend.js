import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const MicroFrontend = ({src, name}) => {
    const CONTENT_HASH = uuidv4()
    useEffect(() => {
        if(document.getElementById(`${name}Script`)) {
          window[`render${name}`](`${name}Container${CONTENT_HASH}`)
          return
        }

        fetch(`${src}/asset-manifest.json`)
          .then((response) =>  response.json())
          .then((manifest) => {
            console.log({manifest})
            let scriptTag = document.createElement('script')
            scriptTag.id = `${name}Script`
            scriptTag.src = `${src}${manifest.files['main.js']}`
            console.log({src: scriptTag.src})
            scriptTag.onload = () => { window[`render${name}`](`${name}Container${CONTENT_HASH}`) }
            document.head.appendChild(scriptTag)
          })
          .catch(error => {
            console.log({error})
          })
        return () => {
          window[`unmount${name}`]()
        }
      }, [])

    return (
        <div id={`${name}Container${CONTENT_HASH}`}></div>
    )
}

export default MicroFrontend
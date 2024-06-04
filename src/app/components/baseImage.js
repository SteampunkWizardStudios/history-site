import NextImage from 'next/image'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default function Image({ src, ...props }) {
  return <NextImage src={`${publicRuntimeConfig.basePath}${src}`} {...props} />
}
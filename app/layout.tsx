import { Roboto } from 'next/font/google'

import type { Metadata } from 'next'

import { HttpProvider } from '@/app/services/http'
import ILayout from '@/app/types/layout'
import isDev from '@/app/utils/is-dev'
import { DevTokenSetter } from '@/app/utils/native/dev-token-setter'
import { NativeBridgeProvider } from '@/app/utils/native/native-bridge-provider'

// import { NativeTokenGate } from '@/app/utils/native/native-token-gate'
import '@/app/styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js Base Template',
    default: 'Next.js Base Template',
  },
  description: 'Here you can find our defitions and examples.',
}

const LayoutRoot = ({ children }: ILayout) => {
  return (
    <html lang='es-PE'>
      <body
        className={`${roboto.variable} font-roboto antialiased`}
        suppressHydrationWarning={true}
      >
        <HttpProvider>
          <NativeBridgeProvider />
          {isDev() && <DevTokenSetter />}
          {children}
          {/* <NativeTokenGate>{children}</NativeTokenGate> */}
        </HttpProvider>
      </body>
    </html>
  )
}

export default LayoutRoot

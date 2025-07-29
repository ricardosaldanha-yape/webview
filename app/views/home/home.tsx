'use client'

import { webviewManagement } from '@/app/utils/native/webview-client'

const ViewHome = () => {
  const handleCloseWebView = () => {
    webviewManagement.closeWebView()
  }

  return (
    <section className='flex min-h-screen flex-col'>
      <div className='flex h-screen w-full flex-col items-center justify-center space-y-4'>
        <p className='text-sm text-gray-500'>authorized</p>
        <button
          onClick={handleCloseWebView}
          className='rounded bg-red-500 px-4 py-2 text-white transition duration-150 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 active:scale-95'
        >
          Close WebView
        </button>
      </div>
    </section>
  )
}

export default ViewHome

import React from 'react'

import MainHeader from '../components/MainHeader'

function layout({children}) {
  return (
    <div>
    <MainHeader/>
      {children}
    </div>
  )
}

export default layout

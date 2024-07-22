import React from 'react'
import { toolbars } from '../toolbarData'
import { motion } from 'framer-motion'

const Toolbar = (props) => {

  const toolbarWidths = [315, 352, 424]

  const selectedToolbarWidth = toolbarWidths[props.activeTab - 1] || 'auto'

  return (
    <>
      <motion.div className='toolbar u-display-flex u-flex-col u-position-absolute u-left-1/2 u-bottom-28 u-border-radius-1 u-translateX-1/2 u-overflow-hidden u-p-0.5'
      animate={{width: selectedToolbarWidth}}
      transition={{type: 'spring',
        stiffness: 802,
        damping: 44

      }}>
        <div className='u-display-flex u-flex-col u-gap-2'>
          {toolbars.map((toolbar, index) => ( 
            props.activeTab === index + 1 ? (
            <div className={`${props.activeTab === index + 1 ? 'u-display-flex u-flex-align-center u-pl-0.2 u-gap-2' : ''}`}
            key={toolbar.id}
            layoutId = 'sdasda'
            animate={{width: 'auto'}}>
              <motion.div className='u-overflow-hidden'
              layout='preserve-aspect'
              layoutId='toolbar-text'
              transition={{type: 'tween',
                duration: 0.1
              }}>
                <span className='u-white-space-nowrap'>{toolbar.text}</span>
              </motion.div>
              <motion.button className={toolbar.btnClass}
              layout='preserve-aspect'
              layoutId = 'toolbar-button'
              transition={{type: 'spring',
                stiffness: 802,
                damping: 44
              }}>
                <span className={toolbar.btnTextClass}>{toolbar.btnText}</span>
              </motion.button>
            </div>
            ) : null
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Toolbar
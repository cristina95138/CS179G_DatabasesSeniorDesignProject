import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Share(props) {

    const onShare = ( ) => {
        window.alert("Share Link: " + window.location.href)
    }

    return (
        <div>
            <button
                onClick={onShare}
                style={{
                    backgroundColor: '#0022cc',
                    borderRadius: '4px', color: 'white',
                    padding: '10px 16px', fontWeight: '500', fontSize: '1rem', textTransform: 'uppercase'
                }}>
                Share
            </button>
        </div>
    )
}

export default Share
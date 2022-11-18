import React, { useContext, useEffect } from 'react'
import { cssSheetPreview } from '../../Context/contexts'

export default function SetStyle(props) {

    let cssSheetPreviewState = useContext(cssSheetPreview);

    useEffect(() => {
        console.log(cssSheetPreview.cssSheet)
    }, [cssSheetPreviewState.cssSheet])

    return (
        <style>
            {cssSheetPreviewState.cssSheet}
        </style>
    )
}

import React from "react"
import RankingPreviewView from "./RankingPreviewView"

import styled from "styled-components"
import RankingPreviewRating from "./RankingPreviewRating"

export default function RankingPreview(){
    return(
        <>
            <Container>
                <RankingPreviewView />
                <RankingPreviewRating />
            </Container>
        </>
    )

}

const Container = styled.div`
    display : flex;
    justify-content : center;
    margin : 50px 0px;

`
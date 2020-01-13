import React from "react"
import { Link } from "gatsby"

import s2Full from '../images/s2_full.svg'

import SEO from "../components/seo"

const IndexPage = () => (
    <>
        <SEO title="Welcome Home" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={s2Full} style={{ width: '25%', height: '25%' }} />
        </div>
    </>
)

export default IndexPage

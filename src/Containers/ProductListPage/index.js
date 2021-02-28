import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProductBySlug } from '../../actions'
import Layout from '../../Components/Layout'

/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductBySlug())
    }, [])
    return (
        <Layout>
            product list page
        </Layout>
    )

}

export default ProductListPage
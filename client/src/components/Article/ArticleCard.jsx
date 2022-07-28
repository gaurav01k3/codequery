import React from 'react'
import img from '../../assets/github.png'
import banner from '../../assets/banner.jpg'
import '../../styles/Article/articleCard.css'
import Moment from 'react-moment';
import { useNavigate } from 'react-router';

const ArticleCard = ({ articleData }) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => { navigate(`/article/${articleData._id}`) }} className='article-card-wrapper'>
            <div className="article-card-header">
                <div className="article-card-owner-image">
                    <img src={img} alt="" />
                </div>
                <div className="article-card-owner">
                    {articleData?.createdBy.name}
                </div>
                <div className="article-post-date">
                    . <Moment fromNow>{articleData?.createdAt}</Moment>
                </div>
            </div>
            <div className="article-card-content-wrapper">
                <div className="article-card-content">
                    <div className="article-card-heading">
                        {articleData?.title}
                    </div>
                    <div className="article-card-sub-head">
                        {articleData?.body}
                    </div>
                </div>
                <div className="article-card-image">
                    <img src={banner} alt="" />
                </div>
            </div>
            <div className="article-card-other-info">
                <div>dummy</div>
                <div>5 min dummy</div>
            </div>
        </div>
    )
}

export default ArticleCard
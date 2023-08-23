import { Link as RouterLink } from 'react-router-dom';

// Images
import sec04Right from '../../assets/images/sections/04_right.png';

// Functions
import { markdownToHTML } from '../../utils/converter';

// Data
import newsData from '../../data/news.json';
// ----------

function News() {
  return (
    <div id="news" className="section page-split row">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="bg-holder float-right">
          <div className="split-color"></div>
        </div>
        <div className="sticky-spacer">
          <div className="section-title-holder float-right">
            <div className="section-top-image">
              <img src={sec04Right} alt="sec 04 right" />
            </div>
            <h2
              className="entry-title"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(newsData.intro),
              }}
            />
            <p
              className="page-desc"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(newsData.intro2),
              }}
            />
          </div>
        </div>

        <div className="section-content-holder float-left">
          <div className="content-wrapper">
            <div className="blog-holder-scode latest-posts-scode block center-relative">
              {newsData.articles.map((article, i) => (
                <article
                  className="relative blog-item-holder-scode"
                  key={'news-article-' + i}>
                  <div className="entry-date published">{article.date}</div>
                  <div className="cat-links">
                    <ul>
                      <li>
                        <RouterLink to="/">{article.category}</RouterLink>
                      </li>
                    </ul>
                  </div>
                  <h4 className="entry-title">
                    <RouterLink to="/">
                      {article.title}
                      <span className="arrow"></span>
                    </RouterLink>
                  </h4>
                  <div className="excerpt">{article.shortDesc}</div>
                </article>
              ))}
              <div className="clear"></div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}

export default News;

import React from 'react'
import Companies from '@/components/home/Companies'
import BlogItem from '@/components/home/Blog-Item'
import MobileApp from '@/components/home/MobileApp'
import blog1 from '@/assets/blogs/blog-1.png';
import blog2 from '@/assets/blogs/blog-2.png';
import blog3 from '@/assets/blogs/blog-3.png';

const BlogSection = () => {
  return (
       <section>
      <div className="mx-auto px-6 py-10 md:py-20 max-w-7xl">
        <Companies />
        <div>
          <p className="uppercase text-sm text-aztec mb-2 mx-auto text-center">
            Latest News
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-800"
          >
            From Our Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogItem category='Residential' title='Skills That You Can Learn In The Real Estate Market' date='20 Jan, 2024' minutes={5} imgSrc={blog1} />
            <BlogItem category='Residential' title='Skills That You Can Learn In The Real Estate Market' date='20 Jan, 2024' minutes={5} imgSrc={blog2} />
            <BlogItem category='Residential' title='Skills That You Can Learn In The Real Estate Market' date='20 Jan, 2024' minutes={5} imgSrc={blog3} />
          </div>
        </div>
        <MobileApp />
      </div>
    </section>
  )
}

export default BlogSection
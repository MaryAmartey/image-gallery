import React from 'react'

const ImageCard = ({image}) =>{
    const tags = image.tags.split(',');
    return (

		<div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
	
							<figure	className="cursor-pointer">
									<img src={image.webformatURL} alt="" className="rounded-t h-72 w-full object-cover" />

								<figcaption className="p-4">
								
									<p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                    Photo by {image.user}
									</p>

                  <ul className="mb-4">
            <li>
              <strong>Views: </strong>
                {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
                {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
                {image.likes}
            </li>
          </ul>
					<small>
							{tags.map((tag, index) =>(
                <span key={index} className="inline-block bg-gray-200 rounded-full 
                    px-3  text-sm font-semibold text-gray-700 mr-2">
                      #{tag}
                </span>
                ))}
      
							</small>
						</figcaption>
					</figure>
				
			</div>     
    
    )
}

export default ImageCard
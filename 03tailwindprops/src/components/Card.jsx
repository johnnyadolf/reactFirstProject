import React from 'react'

function Card({username = 'Jonathan', post = "Not assigned yet"}) {


  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                Tailwind CSS is the only framework that I've seen scale
                on large teams. Its easy to customize, adapts to any design,
               CardContainer the build size is tiny.
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {post}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card
import React from "react";

const post = {
  images: [
    { imageURL: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
    { imageURL: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
    { imageURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
    { imageURL: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
    { imageURL: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
    { imageURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
    { imageURL: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
    { imageURL: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
  ],
  comments: [
    { id: 0,
      name: 'Chelsea Hagon',
      likes: 12,  
      replyVisible: true,
      message: 'You rock at this! and a reply is visible...', 
      avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      replys: [
        { id: 0, name: 'Angela Fisher', likes: 9, replyVisible: true, message: 'No! 1 Someone will team up with you! Im signed upf or the 10 and dont hav a specific partner preplaned.', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
        { id: 1, name: 'Francis Watson', 
          likes: 13,
          replyVisible: false,
          message: 'oh man', 
          avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          replys: [
            { id: 0, name: 'Angela Fisher', likes: 3, message: 'No! 2 Someone will team up with you! Im signed upf or the 10 and dont hav a specific partner preplaned.', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
            { id: 1, name: 'Angela Fisher', likes: 0, message: 'No! 3 Someone will team up with you! Im signed upf or the 10 and dont hav a specific partner preplaned.', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
          
          ]
        },
      ]
    },
    { id: 1, name: 'Angela Fisher', likes: 3, replyVisible: false, message: 'No! 400 Someone will team up with you! Im signed upf or the 10 and dont hav a specific partner preplaned.', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
    { id: 2, name: 'Carla Yates', likes: 0, replyVisible: false, message: 'Great work bro.', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
    { id: 3, 
      name: 'Leslie Johnson', 
      likes: 0,
      message: 'Cant stop looking at this. dang...', 
      replyVisible: false,
      avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      replys: [
        { name: 'Courtney Henry', message: 'You rock at this!', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
        { name: 'Tom Cook', message: 'You rock at this!', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
      ]
    },
    { id: 4, name: 'Francis Watson', likes: 13, replyVisible: false, message: 'oh man', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
    { id: 5, name: 'Tracey Palmer', likes: 3, replyVisible: false, message: 'You rock at this!', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
    { id: 6, name: 'Alejandro Davidson', likes: 0, replyVisible: false, message: 'You rock at this!', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  ]
};

export default function FbPostImagesComments() {
  
  const renderImages = images => {
    switch(post.images.length) {
      case 1:
        return images.map((img) => <img className="object-cover w-full h-full" src={img.imageURL} alt=""></img>)
      case 2:
        return images.map((img) => <img className="inline-block object-cover w-1/2 h-96" src={img.imageURL} alt=""></img>)
      case 3:
        return images.map((img, index) => <img className={(index < 1 ? 'w-1/2 h-96 absolute' : 'w-1/2 h-48 -right-1/2 relative') + " object-cover"} src={img.imageURL} alt=""></img>)
      case 4:
        return images.map((img) => <img className="inline-block object-cover w-1/2 h-1/2" src={img.imageURL} alt=""></img>)
      case 5:
        return images.map((img, index) => <img className={(index < 2 ? 'w-1/2' : 'w-1/3') + " h-1/2 object-cover inline-block"} src={img.imageURL} alt=""></img>)
      default:
        const payload = images.map((img, index) => 
          <>
            {index < 5 && <img className={(index < 2 ? 'w-1/2' : 'w-1/3') + " h-1/2 object-cover inline-block"} src={img.imageURL} alt=""></img>}
            {index === (images.length - 1) && <button className="absolute bottom-0 right-0 w-1/3 text-white bg-black opacity-80 h-2/5">+ {images.length - 5}</button>}
          </>
          )
        return payload
     }
  }

  const Comment = props =>  {  
    return (
      <div className="relative">   
        {((props.level !== 3 && props.hasReplys) || (props.level !== 3 && props.replyVisible)) && <span className="absolute h-full border border-gray-100 left-4 border-left-2"></span>}     
        {((props.level !== 1 && props.parentHasReplys && !props.isLast) || (props.level === 3 && props.parentReplyVisible && props.isLast) || (props.level === 2 && props.parentReplyVisible)) && <span className="absolute h-full border border-gray-100 -left-7 border-left-2"></span>}
        {(props.parentParentReplyVisible) && <span className="absolute h-full ml-2 border border-gray-100 -left-20 border-left-2"></span>}
        {(props.level !== 1) && <span className="absolute w-8 h-6 border border-t-0 border-b-2 border-l-2 border-r-0 border-gray-100 -left-7 rounded-bl-xl -top-2"></span>}
        <div className={"flex items-start w-full space-x-2 group"}> 
          <button className="z-10 flex-shrink-0 block border-2 border-white rounded-full focus:outline-none hover:bg-black focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
            <img className={(props.level === 1 ? 'w-8 h-8' : 'w-6 h-6') + " bg-gray-300 rounded-full hover:opacity-90"} src={props.avatarURL} alt=""></img>
          </button>
          <div className="text-left">
            <div className="bg-gray-100 rounded-xl pl-3 pr-3 py-1.5 relative inline-block min-w-2/5">
              <div className="text-xs font-semibold">{props.name}</div>
              <div className="text-sm font-normal text-gray-800">{props.message}</div>
              {props?.likes > 0 && (
                <button className="absolute flex p-1 text-xs text-gray-500 bg-white rounded-full shadow right-1 -bottom-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="relative inline-block w-4 h-4 mr-1 text-white bg-blue-500 rounded-full ring-1 ring-white" fill="currentColor" viewBox="-6 -4 30 30"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
                  {props?.likes} 
                </button>
              )}
            </div>
            <div className="mt-1 mb-1.5 ml-3.5 text-xs text-gray-500">
              <button className="font-semibold">Like</button> · <button className="font-semibold">Reply</button> · 12h
            </div>
          </div>
          <button className="block p-2 text-gray-500 rounded-full opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
        </div>
      </div>
    )
  }

  const Reply = props => {
    return (
      <ul className="ml-11" id={'reply-lvl-1-'+props.id}>
        <li>
          <form className="relative">
            {props.level === 2 && <span className="absolute h-full ml-2 border border-gray-100 -left-20 border-left-2"></span>}      
            <span className="absolute w-8 h-6 border border-t-0 border-b-2 border-l-2 border-r-0 border-gray-100 -left-7 rounded-bl-xl -top-2"></span>
            <div className="flex items-center justify-between w-full pb-3 pr-10 space-x-2">
              <button aria-label="Chris Chilcoat's Timeline" role="link" tabIndex="0" className="z-20 flex-shrink-0 block border-2 border-white rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
                <img className="w-6 h-6 bg-gray-300 rounded-full hover:opacity-90" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
              </button>
              <input type="text" className="flex-1 px-3 py-1 text-sm font-light text-left text-gray-700 placeholder-gray-500 bg-gray-100 rounded-full shadow-inner hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 text-md focus:ring-opacity-60" placeholder="Write a reply..."></input>
            </div>
          </form>
        </li>
      </ul>
    )
  }

  const renderComments = comments => {
    return comments.map((comment, index, array) => {
      const replyVisible_l1 = (comment.replyVisible ? true : false),
            hasReplys_l1 = (comment.replys ? true : false);
      return (
        <ul key={index}>
          <li>
            <Comment 
              level={1} 
              isFirst={index === 0 ? true : false} 
              isLast={array.length - 1 === index ? true : false} 
              hasReplys={hasReplys_l1} 
              replyVisible={replyVisible_l1} 
              name={comment.name} 
              avatarURL={comment.avatarURL} 
              message={comment.message} 
              likes={comment.likes}
            />
            {comment?.replys && comment?.replys?.map((comment, index, array) => {
              const replyVisible_l2 = (comment.replyVisible ? true : false),
                    hasReplys_l2 = (comment.replys ? true : false)   
              return (
                <ul key={index} className="ml-11">
                  <li>
                    <Comment 
                      level={2} 
                      isFirst={index === 0 ? true : false} 
                      isLast={array.length - 1 === index ? true : false} 
                      hasReplys={hasReplys_l2} 
                      replyVisible={replyVisible_l2} 
                      parentReplyVisible={replyVisible_l1}
                      parentHasReplys={hasReplys_l1}
                      name={comment.name} 
                      avatarURL={comment.avatarURL} 
                      message={comment.message} 
                      likes={comment.likes}
                    />                    
                    {comment?.replys && comment?.replys?.map((comment, index, array) => {
                      return (
                        <ul key={index} className="ml-11">
                          <li>
                            <Comment 
                              level={3} 
                              isFirst={index === 0 ? true : false} 
                              isLast={array.length - 1 === index ? true : false}
                              parentParentReplyVisible={replyVisible_l1}  
                              parentReplyVisible={replyVisible_l2}
                              parentHasReplys={hasReplys_l2}
                              name={comment.name} 
                              avatarURL={comment.avatarURL} 
                              message={comment.message}
                              likes={comment.likes}
                            />
                          </li>
                        </ul> 
                      )
                    })}
                    {replyVisible_l2 && <Reply key={index} level={2}/>}
                  </li>
                </ul> 
              )
            })}  
            {replyVisible_l1 && <Reply key={index} level={1}/>}
          </li>
        </ul>
      )}
    )
  }
    
  return (
    <article>
      <div aria-label="Create a post" role="region" className="max-w-2xl mx-auto mt-5 mb-5 bg-white border rounded-lg shadow border-gray-150">
        <div className="flex items-center justify-between w-full px-4 py-2 space-x-2">
          <button aria-label="Chris Chilcoat's Timeline" role="link" tabIndex="0" className="flex-shrink-0 block rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
            <div>
              <img className="w-10 h-10 bg-gray-300 rounded-full hover:opacity-90" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""></img>
            </div>
          </button>
          <div className="flex-1 ml-3 text-left">
            <div className="block text-sm text-gray-500">
              <button className="font-medium text-black">Christina Murtada</button> is with <button className="font-medium text-black">Julie Blank</button>
            </div>
            <div className="block text-sm font-light text-gray-500">
              <div>May 12</div>
            </div>
          </div>
          <button aria-label="Chris Chilcoat's Timeline" role="link" tabindex="0" className="flex-shrink-0 block p-2 m-1 text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
        <div className="relative">
          {post.images ? renderImages(post.images) : null}
        </div>
        <div className="flex mx-4 bg-transparent border-t border-black-400">
          <div className="relative z-0 flex-1 px-2 py-3 -space-x-1 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="relative z-30 inline-block w-5 h-5 text-white bg-blue-500 rounded-full ring-1 ring-white" fill="currentColor" viewBox="-6 -4 30 30"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
            <span className="pl-3 ml-10 text-sm text-gray-500">12</span>
          </div>
          <button className="right-0 pl-3 ml-10 text-sm text-gray-500 flex-0">30 Comments</button>
        </div>
        <div className="flex mx-4 bg-transparent border-t border-black-400">
          <button className="flex-1 py-2 my-1 font-medium text-gray-500 rounded-md text-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
            <div className="flex justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 -2 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span>Like</span>
            </div>
          </button>
          <button className="flex-1 py-2 my-1 font-medium text-gray-500 rounded-md text-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
            <div className="flex justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 -2 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span>Comment</span>
            </div>
          </button>
        </div>
        <div className="py-4 mx-4 bg-transparent border-t border-black-400">
          {post.comments ? renderComments(post.comments) : null}
          <div className="flex items-center justify-between w-full space-x-2 ml-0.5">
            <button aria-label="Chris Chilcoat's Timeline" role="link" tabIndex="0" className="flex-shrink-0 block rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
              <img className="w-8 h-8 bg-gray-300 rounded-full hover:opacity-90" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
            </button>
            <input type="text" className="bg-gray-100 shadow-inner hover:bg-gray-200 rounded-full px-3 py-1.5 flex-1 text-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 text-md focus:ring-opacity-60 font-light" placeholder="Write a reply..."></input>
          </div>
        </div>
      </div>
    </article>
  )
}
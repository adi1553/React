import React from 'react'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'

const user = 'Fname Lname'
const posts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Fname Lname' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Fname Lname' }
]

export default function App () {
    return (
        <div style={{ padding: 8 }}>
            <UserBar />
            <br />
            <CreatePost user={user} />
            <br />
            <hr />
            <PostList posts={posts} />
        </div>
    )
}

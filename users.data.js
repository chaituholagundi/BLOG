/**
 * User Collection data in DB
 * User Id, 
 * User Name,
 * list of blogs id's that the user commented on
 * list of first level connections
 */



/* 1 */
{
    "_id" : ObjectId("5e1c5091dd77fac64d86bc64"),
    "userId" : 1,
    "userName" : "a",
    "blogs" : [ 
        1, 
        3
    ],
    "firstLevelConnections" : [ 
        3
    ]
}

/* 2 */
{
    "_id" : ObjectId("5e1c50a1dd77fac64d86bc73"),
    "userId" : 2,
    "userName" : "b",
    "blogs" : [ 
        2, 
        4
    ],
    "firstLevelConnections" : [ 
        3, 
        4
    ]
}

/* 3 */
{
    "_id" : ObjectId("5e1c50aedd77fac64d86bc7a"),
    "userId" : 3,
    "userName" : "c",
    "blogs" : [ 
        2, 
        3
    ],
    "firstLevelConnections" : [ 
        1, 
        2
    ]
}

/* 4 */
{
    "_id" : ObjectId("5e1c50b6dd77fac64d86bc81"),
    "userId" : 4,
    "userName" : "d",
    "blogs" : [ 
        4
    ],
    "firstLevelConnections" : [ 
        2
    ]
}
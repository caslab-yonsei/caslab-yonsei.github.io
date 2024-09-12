---
layout: news
title: (News title)
photos: 
  - (title of photos, from the url /photos/'title'/)
members:
  - (related person 1)
  - (related person 2)
  - (...)
  - (related people)
YYYY: "(year)" # must be in quotes
MM: "(month in two numbers)"
DD: "(day of the month, you can omit)"
sidebar:
  # you can add, remove, reorder, and/or customise the sections
  - title: (Title of the sidebar section)
    items:
      - type: link
        icon: (icon for link 1)
        text: (text for link 1)
        url: (url for link 1)
  - title: (Title of the sidebar section)
    items: # you also can include many items under the same section
      - type: text
        icon: (icon for item 1 from https://fontawesome.com/v4/icons/, leave empty if default)
        text: (text for item 1)
        reveal: false # when true, on hover the omitted part will be revealed
      - type: link
        icon: (icon for item 2)
        url: (link for item 2)
        text: (text for item 2, leave empty if url)
        reveal: false
      - type: file
        icon: (icon for item 3)
        url: (link for item 3's file)
        text: (text for item 3, leave empty if filename)
        reveal: false
      - type: member
        icon: (icon for item 4)
        name: (name of member to link)
        text: (text for item 4, leave empty if member's name)
        reveal: false
      - type: internal
        icon: (icon for item 5)
        name: "/categoty/page-to-link/" # valid category: members,publications,photos,news,lectures
        text: (text for item 5, leave empty if title of page)
        reveal: false
alterlink: (alternative link address, if provided this page is not accessible, '#' indicates no link at all, '@' indicates link per member on title)
template: true #(delete this line)
---

(news description if needed, if provided leave alterlink 0 )
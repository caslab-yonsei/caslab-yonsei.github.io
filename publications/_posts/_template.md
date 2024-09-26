---
layout: publication
title: "(paper title)"
image: (representative image, leave empty if not possible)
authors:
  - name: (author fullname 1)
    short: (author short name 1) # if member, you can omit this
  - name: (author fullname 2)
    short: (author short name 2)
  - name: (author fullname 3)
    short: (author short name 3)
co-first: false # true if author 1, 2 are co-first authors
type: Paper, Patent, ...
international: true # false if domestic
paper: # delete if patent
  year: (published year)
  publisher: "(Publisher fullname)"
  publisher-short: "(Publisher short name)"
  ref: "<b>(issue number)</b>: (article number / page number / etc)" #(leave empty if not possible)
patent: # delete if conference/journal
  status: filed/issued
  nation: Korea/PCT/US/Japan/...
  number-application: (filed patent number)
  date-application: YYYY.MM.DD
  number-publication: (issued patent number)
  date-publication: YYYY.MM.DD
researches: # related research area among ai/cloud/memory/power/security
  - (area 1)
  - (area 2)
keywords: [(keyword 1), (keyword 2), ...]
doi: (doi number)
sidebar:
  # following is just example, all types are shown
  # you can reorder, delete, add, and/or customise
  - title: Awards
    items:
      - type: text
        icon: trophy
        text: (award 1)
        reveal: true
        overt: true
      - type: text
        icon: trophy
        text: (award 2)
        reveal: true
        overt: true
  - title: Github
    items: 
      - type: link
        icon: gitbub-alt
        url: (source code github address)
        text: (repository name)
        overt: false
  - title: PDF
    items: 
      - type: file
        url: (file address)
  - title: Supplement
    items: 
      - type: file
        url: (supplement address)
        icon: paperclip
  - title: (Title of the sidebar section)
    items: # you also can include many items under the same section
      - type: text
        icon: (icon for item 1 from https://fontawesome.com/v4/icons/, leave empty if default)
        text: (text for item 1)
        reveal: false # when true, on hover the omitted part will be revealed
        overt: false # when true, this info will be shown on publications page
      - type: link
        icon: (icon for item 2)
        url: (link for item 2)
        text: (text for item 2, leave empty if url)
        reveal: false
        overt: false
      - type: file
        icon: (icon for item 3)
        url: (link for item 3's file)
        text: (text for item 3, leave empty if filename)
        reveal: false
        overt: false
      - type: member
        icon: (icon for item 4)
        name: (name of member to link)
        text: (text for item 4, leave empty if member's name)
        reveal: false
        overt: false
      - type: internal
        icon: (icon for item 5)
        name: "/categoty/page-to-link/" # valid category: members,publications,photos,news,lectures
        text: (text for item 5, leave empty if title of page)
        reveal: false
        overt: false
components: [abstract, keywords, topics]
hidden: false # true to hide from publication page (not related to the lab, etc.)
template: true #(delete this line)
---

(abstract)
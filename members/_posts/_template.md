---
layout: member
title: (Fullname)
abbrev: (Short name)
profile_name: (Fullname for profile)
prefix: (title, e.g. Prof., Dr.)
role: (Professor/Student/Alumni)
position: (Position e.g. Assistant Professor, Ph.D. Student)
image: /members/images/(image file)
researches:
  - (research interest 1)
  - (research interest 2)
sidebar:
  # following is just example, all types are shown
  # you can reorder, delete, add, and/or customise
  - title: Location
    items:
      - type: text
        icon: map-marker
        text: (location)
        reveal: true
  - title: Email
    items:
      - type: email
        text: (id) at (address)
        reveal: true
        overt: true
  - title: Phone
    items:
      - type: text
        icon: phone
        text: (phone number)
        reveal: true
  - title: Google Scholar
    items:
      - type: link
        icon: book
        url: (google scholar page url)
        text: (fullname)
  - title: CV
    items:
      - type: file
        url: (cv file url)
  - title: Resume
    items:
      - type: file
        url: (resume file url)
  - title: LinkedIn
    items:
      - type: link
        icon: linkedin-square
        url: (linkedin url)
        text: (fullname)
  - title: GitHub
    items:
      - type: link
        icon: github-alt
        url: (github profile url)
        text: (github profile name)
  - title: Website
    items:
      - type: link
        icon: globe
        url: (website url)
  - title: (Title of the sidebar section)
    items: # you also can include many items under the same section
      - type: text
        icon: (icon for item 1 from https://fontawesome.com/v4/icons/, leave empty if default)
        text: (text for item 1)
        reveal: false # when true, on hover the omitted part will be revealed
        overt: false # when true, this info will be shown on members page
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
alumni: # delete if not needed
  degree: (graduation degree)
  date: (graduation month year, e.g. February 2022)
  affiliation: (affiliation after graduation)
  designation: (designation at affiliation)
alterlink: (alternative link address, if provided this page is not accessible, '#' indicates no link at all)
components: [researches, contents, publications, patents, photos] # remove if you don't want something
template: true #(delete this line)
---

(introduction of the member in markdown/html)

use <div class="bigspacer"></div> between paragraphs for better layout
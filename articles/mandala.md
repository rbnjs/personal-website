---
layout: layout-inside.liquid
title: Organizing Goals with the Mandala Chart
date: 2026-01-01
tags: 
  - articles
  - en
description:  The core idea is simple, you place a **central objective** in the middle of a 3x3 matrix. Surrounding this center, you identify eight **supporting objectives** necessary to achieve the main goal.
keywords: Gettings things done, organization, mandala, chart
---

# Organizing Goals with Mandala Charts

As the year comes to its end, or perharps has already ended by the time you read this, though I still have the Chinese New Year, many draft new year's resolutions. They are often made to feel guilty about not achieving them. Well, at least the gyms will be packed on January.

Fortunately you're not like them my dear reader! What you write down, you   accomplish.

I rarely write year-end reflections or make simple wishes. However, in my Meditation Center we spent some time writting Mandala Charts and we had a really great time. I'd like to share it with you.

## So what's a Mandala Chart?

The concept takes its name from the intricate, circular art created by early Indian and Tibetan Buddhists, often destroyed upon completion to symbolize impermanence.

The core idea is simple: you place a **central objective** in the middle of a 3x3 matrix. Surrounding this center, you identify eight **supporting objectives** necessary to achieve the main goal.

These eight supporting objectives then become the centers of their own 3x3 matrices, expanding the chart into a massive 9x9 grid. Each supporting objective is flanked by eight concrete "sub-objectives" or actionable tasks.

The method exploded in popularity here in Taiwan thanks to Shohei Ohtani. The baseball superstar famously used a Mandala Chart to visualize the specific skills and habits required to achieve his historic success ([Here is a recopilation video of him with Eurodance music to make you believe](https://peertube.linuxrocks.online/w/7hvcyGFLhSAPsc883qZjEx?start=39s)). It is a tool for clarity; the journey requires daily and consistent work.

## The Mechanics

Take a piece of paper and draw a 3x3 grid. In the center square, write your main goal for the year (e.g., a career milestone or lifestyle change). In the surrounding eight squares, write the pillars required to support that goal. For example, if your goal is career advancement, pillars might include "Public Speaking," "Technical Certification," or "Networking."

Next, expand outward. Create eight new 3x3 grids. Place those "pillar" objectives in the center of their own grids and fill the surrounding squares with actionable items.

By the time you finish, you will have roughly 72 specific sub-objectives.

## Isn't that too much?

It can be. Living in Germany, I developed a strong distaste for corporate KPIs (Key Performance Indicators). They were often paradoxically tied to performance reviews: you were expected to set ambitious goals, yet penalized if you didn't hit 100% of them.

Life goals must be different. To do something truly meaningful, we should strive for three criteria:

- **Meaning:** The goal must inspire you and compel others to help you. For instance, rather than a generic "lose weight," frame the objective as "improve my health to support my life's work."
    
- **Depth:** How will this objective affect your future? Are you striving for something fleeting, or something that leaves a legacy?
    
- **Width:** Does this goal serve others, or only yourself?
    

## A Digital Approach

I approach the Mandala Chart differently. I prefer digital text and secure file storage over paper, so I utilize **Mermaid.js** to create a mindmap (or a graph, for my Computer Science friends).

Here is how I structure it:

```mermaidjs
mindmap
    root((**Follow my dreams of living in Taiwan**))
    
    (Learn Chinese)
      
    (Obtain visa requirements to stay in Taiwan)

    (Take care of parents)

    (Take care of Body)

    (Integrate in the Meditation center)

    (Overcome Shyness)

    (Improve Habits)

    (Finish meditation courses)
```

In this format, the root is the main goal, and the branches are the supporting pillars. While a list works, the visual nature of Mermaid, or the traditional grid, helps the brain process the connections.

You then expand the branches with concrete actions:

```
mindmap
    root((**Follow my dreams of living in Taiwan**))
    
    (Learn Chinese)
      
    (Obtain visa requirements to stay in Taiwan)
    (Write exactly what the requirements are)
        (Ensure 60k income per Month)
        (Finish CV in Chinese)
        (Start visa extension process)
        (Pay taxes)
        (Confirm start date for job)
        (Ensure legal requirements for company are met)
        (Improve spoken business Chinese)

    (Take care of parents)

    (Take care of Body)

    (Completely integrate in the Meditation center)

    (Overcome Shyness)

    (Improve Habits)

    (Finish meditation courses in the meditation center)
```

These kind of text files can be transformed into images like these:


![A Mandala Mind Map of the previous code](/img/mandala/mandala.png)

Mola mogollón, in Spanish. And I just did this in my terminal:

```bash
mmdc -i objectives.mmd -o output.png -t forest
```

I haven’t fully completed my chart yet, but this illustrates the method. If you prefer paper over code, the traditional grid looks like this:

![A proper Mandala Chart written in paper](/img/mandala/mandala-paper.jpeg)

But it doesn't feel so cool to me. In any case, I hope this method of visualizing goals can help you make your dreams come true (夢想成真).

Have a blessed 2026,

Ruben


### A Final Note on Privacy

### Should you share your goals with everyone?

In many cultures—Spanish-speaking ones included—discussing big dreams prematurely is often viewed with superstition or skepticism. Personally, I am wary of broadcasting my deepest goals. The examples above are close enough to reality to explain the method, but my true, detailed chart remains private, stored safely on my PC.

Whatever method you choose, remember: the map is not the real thing, but it is a model to ensure you don't get lost.

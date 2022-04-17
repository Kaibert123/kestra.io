---
title: "Introducing Kestra first public release :tada:"
description: Today, our team is proud to announce the first public release of Kestra — an open-source platform to orchestrate and schedule workflows of any kind at scale.
date: 2022-02-01T10:00:00
layout: BlogsPost
author:
  name: Ludovic Dehon
  image: "ldehon"
  twitter: "@tchiotludo"
image: /blogs/2022-02-01-kestra-opensource.jpg
---

Today, our team is proud to announce the first public release of Kestra, an open-source platform to orchestrate and schedule workflows of any kind at scale.


## What is Kestra?
Kestra is :
- **an orchestrator**: Build complex data pipelines in just a few minutes.
- **a scheduler**: Launch and schedule your workflows at any time, at any interval.
- **a rich ui**: Create, run, and monitor all your flows with a real-time user interface.
- **a data orchestrator**: With its many plugins, integrate your data orchestration directly with many different solutions.
- **cloud native & scalable**: Scale to millions of executions without stress or hassle.
- **an all-in-one platform**: No need to use multiple tools to deliver a complete pipeline.
- **a pluggable platform** With the option to choose from several plugins or to build your own.

As you can see, Kestra will handle **all your pipelines** !

## The History of Kestra!
Kestra started in 2019 with this [initial commit](https://github.com/kestra-io/kestra/commit/d57e30c0c0d450590a1eaac5df0e82e1ea94e562). At this time, Kestra was at the proof-of-concept stage.

<img src="./2022-02-01-kestra-opensource/initial-commit.jpg" class="rounded img-thumbnail float-left mr-4 mb-4" alt="Initial commit" style="max-width: 450px">


To provide a bit of a background: 
I was working for Leroy Merlin as a consultant. We needed to build a new cloud-based data platform from scratch (destination: mostly Google Cloud Platform). We tried a [lot of things](/blogs/2022-02-22-leroy-merlin-usage-kestra) and were met with failure in some of our efforts. The **biggest setback was the orchestration software**.  We tried to use one of the better known solutions on the market, Apache Airflow, but found it lacking in many areas. There was a great deal of instability, (tasks that failed simply due to the Airflow scheduler), performance issues (unable to handle a light workload), and a lack of features (scaling, data processing). After many tests (Google Composer, Open source Airflow on Kubernetes), the decision was final: **Airflow was rejected by Leroy Merlin**.

<div class="clearfix" />

I did some research on the orchestrator ecosystem; most were **proprietary and license based** (far from my mind-set), and very few were open source (at this time, only Apache Airflow seemed to be active — and as stated above, it could not handle the job). I was really surprised to discover that the orchestrator ecosystem was so limited, and faced this challenge from a co-worker:

> "If you think Airflow is bad, do better!"

It was decided: I set myself the task of producing a proof of concept for our own open-source workflow management system. It took a lot of time to build this software, and the task seemed to be never ending; but I continued to work on it for several months by:
- Choosing [Kafka for the database and queue](https://github.com/kestra-io/kestra/commit/b4d026574c2fb141a3c7dd5b7f1481a31063acb2)
- Implementing [storage](https://github.com/kestra-io/kestra/commit/bcc5798d7fdcbe3afe95c019c41ddc546b24f62d) for task processing
- Choosing [ElasticSearch as a repository for UI](https://github.com/kestra-io/kestra/commit/2ede1e692be50999bc16f011f6a4796ffbbb9e1a)
- Adding some dynamic templating with [HandleBar](https://github.com/kestra-io/kestra/commit/05f1e20a3cb1e9a623024f5674144b3934cd5874) and later, changing it to Peeble
- Creating some [Google Cloud](https://github.com/kestra-io/kestra/commit/14e3384be2144a2bf6698439b5ae22106ac83914) plugins
- Introducing [the UI](https://github.com/kestra-io/kestra/commit/1fef7509bb2d04b24bf66fce19b35dd01411a1db) — built with [Vue.js](https://vuejs.org/)

And so on!

During a thirty-month period I built a variety of features, numerous plugins, and countless bug fixes — mostly at night, as I was still working as a full-time consultant for Leroy Merlin. It took a lot of effort, investment, and time that I could have spent with my family.

But I certainly cannot say I'm not proud of the results!

## Kestra is Open Source!
I'm a real open-source enthusiast. As an architect, I’ve been interested in open-source solutions in IT for twenty years. Like most people, I started as an open-source consumer (using it without adding contributions). I then decided that the time was right to begin contributing, by starting out with the permissive [Apache License](https://github.com/kestra-io/kestra/blob/develop/LICENSE).

Three years ago, I started another open-source project, [AKHQ](https://github.com/tchiotludo/akhq), with the same license. Working with a successful project was an invaluable experience for me as it helped me learn how to build a community around a project. I've also learnt that an open-source system won't pay the bills on its own. AKHQ required a lot of personal investment, Kestra has required even more and will continue to do so in the future!  For anyone considering this path, this means ensuring that you have the financial resources in place to enable your project to be viable and sustainable, it is not for the faint of heart. To make this dream possible for us, we decided to create a company alongside Kestra in order to raise the required funds to support the development of the open-source software.

The open source license is not limited and allows you to install and run it however you want, on your own on-premise server, or in the cloud.  We have also built our own **Enterprise Edition** , bringing added stability, security and productivity to your Kestra clusters. In addition, we plan to deliver Kestra in the form of a SaaS (software as a service) offering in the near future (don't hesitate to [contact us](/company/contact) for more information).


## Kestra Plugins are also Open Source!
When implementing the deep integration of the tools and databases you are using, the connectors (what we call “plugins”) can present the biggest challenge. Most orchestrators (even proprietary and licensed based) only communicate via bash or cmd. You have to manage all of your needs with simple commands, often requiring you to use another tool in order to have access to the underlying resource (such as Talend). With Kestra, we wanted to provide a deep integration with your tools and let [bash](/plugins/core/tasks/scripts/io.kestra.core.tasks.scripts.Bash) deal solely with edge cases a plugin can't cover.

An example for a query to Google BigQuery:

> with Bash
```shell
DATE=$(date --iso-8601=seconds)
bq --format=json query 'SELECT name FROM \`project.dataset.table\` WHERE shippedDate=${DATE} AND shippedCountry = \'FR\'' > /tmp/query.json
jq -r '.name' /tmp/query.json
```

> with Kestra
```yaml
- id: query
  type: io.kestra.plugin.gcp.bigquery.Query
  fetchOne: true
  sql: |
    SELECT name
    FROM `kestra-prd.demo.salesOrder` AS s
    WHERE shippedDate = '{{ now() }}'
    AND shippedCountry = 'FR'
- id: "return"
  type: "io.kestra.core.tasks.debugs.Return"
  format: "{{ outputs.query.row.name }}"
```

Kestra avoids the rigamarole of installing the software on the system, handling dependencies and conflicts, dealing with Python, etc. — just install a plugin (a simple jar) and speak directly with your database.

We have a [number of plugins](/plugins/) and the process of [developing your own](/docs/plugin-developer-guide/) is very simple. We also hope that a community will help us to maintain new plugins and connectors ([contact us](/company/contact) if you require help or support).

## First Public Release *and* Production Ready!
First public release does not mean that Kestra is not production ready. In fact, it has been **used in production since August 2020 at Leroy Merlin**. Take a deeper look at the [case study](/blogs/2022-02-22-leroy-merlin-usage-kestra) if you want more details. Here are some figures to give a picture of Kestra’s credentials:
- **4 clusters** one for every environment
- **200+ users/developers**
- **2000+ flows** in production
- **350,000 executions** every month
- **3,000,000 tasks** every month
- **Equivalent of 1,500 days of task processing time** every month (yes, that’s the equivalent of fifty days of task processing every single day)

So, I can guess your next question:
**"Why did you wait so long for the first public release?"**

The answer is simple: we wanted to deliver the best first impression possible, and this led to a lot of work. We wanted to address missing features, missing plugins, a new UI design, and polish the documentation and website. Now we are proud and confident enough in our product to display the results of our labor.

The road is not finished; we still have a lot to do. Stay tuned for the journey!


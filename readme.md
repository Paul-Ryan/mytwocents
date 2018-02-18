# Background and Overview
Being asked to write an article for “exposure” or for a very low payment is a problem many writers experience. We want to offer publications a way to give their writers an additional potential revenue source directly from their readers.

My 2 Cents is an embeddable widget that will allow readers to offer authors small amounts of money, or "tips", with a very simple click (or a couple of clicks). My 2 Cents widget will be JavaScript code generated on a per-article bases and need to be embedded on each article page (or wherever--the functionality will be the same). Toggling a tip on our widget will represent a pledge to

# Functionality & MVP
 * clicking widget registers intent to pay (not payment) - there are only two states: tipped/not tipped. If a user is not logged in, they will be sent to our site to create an account.
 * Account creations: user chooses tip amount on account creation from a set of predetermined amounts and pay $10 to create their tip pool.
 * visual receipts (user pages) shows articles tipped + articles written
 * At the end of a predetermined payment cycle authors that have made a minimum payout ($10?) are paid

### Bonus
 - action history, cancel pledged payments
 - choose payout amount
 - motivate tippers: author interactions? competitive lists of most rewarded articles

# Potential Problem areas
 * transaction fees are large (2.9% + 30 cents, min)
 * users must be logged in for widget to work (cookie?)
 * learning to use Django

![plan1](https://github.com/Paul-Ryan/mytwocents/blob/master/docs/plan1.jpg)
![plan2](https://github.com/Paul-Ryan/mytwocents/blob/master/docs/plan2.jpg)


# Widget Functionality
 * Toggles between paid or not paid (registers intent to pay)
 * Link to our site, which contains users accounts and signup forms


# UX
  * frontend interface (widget)
  ** we will have a simple button, with an icon, that can toggle between the states: "tipped" and "not tipped"
  ** the widgets will contain a link back to our site
  * frontend interface (site)
  ** account creation
  ** User pages display links to articles they have pledged to support, links to those articles, and if the payment has been completed
  * backend
  ** our backend will be a standard Django build
  ** toggling our widget to tipped will send a request to our database to create a record of an association between a User (that clicked the widget) and an Article ID.
  ** we will create actions to sent API requests to process payments at the end of a standard payment period

# Technologies
We will be using:
  * Django - like rails with more configuration, written by a media company publishing news articles
  * React
  * Postgresql
  * Stripe (and possibly paypal) apis for the bonus goal

# Project Flowchart (tbd)


## Front-end
React.js/Redux

## Back-end
 * Django - we will learn this this weekend
 * postgres or MongoDB - we are still discussing this


## Third-party payment (bonus)
 * Stripe

# Accomplished over the Weekend

 * All group members worked through the Django tutorial
   * Installing Django
   * Installing and enabling Python virtual environments
 * First draft of the DB schema
 * Hashed out how the app should actually work
   * User stories created
 * Preliminary division of responsibilities agreed upon
 * Preliminary Widget design created

# Group Members & Work Breakdown
Brian Taylor Vann (BTV), Brian van den Broek (BvdB), Paul Ryan (PR) and
Alexey Spiridonov (AS)

## Day 1

 * Finalize DB Schema (all)
 * Finalize the pages the app will need (all)
 * Create Django models for user_payments and transactions (BTV)
 * Create Django models for users and articles (BvdB)
 * Generate two fake blog pages for demo site use (PR)
 * Produce (in React) forms for account generation (AS)

## Day 2

 * Implement cookies for persistent login (AS)

## Day 3

 * Visual Design of Widget (AS)
 * Widget Generation (PR)

## Day 4

## Day 5

## Day 6

## Day 7

* Write README.md

# DB
- users
- articles
- user_pay_in
- user_payout
- joins tables

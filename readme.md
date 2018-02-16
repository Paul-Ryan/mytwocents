# Background and Overview
Being asked to write an article for “exposure” or for a very low payment is a problem many writers experience. We want to offer publications a way to give their writers an additional potential revenue source.

My 2 Cents is an embeddable widget that will allow readers to offer authors small amounts of money with a very simple click (or a couple of clicks).

# Functionality & MVP
 * clicking widget registers intent to pay (not payment) - there are only two states: tipped/not tipped
 * user chooses tip amount on account creation from a set of predetermined amounts
 * visual receipts (user pages/must login)
 * At the end of a predetermined payment cycle authors that have made a minimum payout ($10?) are paid
### Bonus
 - action history, cancel pending
 - choose payout amount

# Widget Functionality
 * Toggles between paid or not paid (registers intent to pay)
 * Link to our site, which contains users accounts


# UX
  * frontend interface (widget)
  ** we will have a simple button, with an icon, that can toggle between the states: "tipped" and "not tipped"
  ** the widgets will contain a link back to our site
  * frontend interface (site)
  ** account creation
  ** User pages display links to articles they have pledged to support, links to those articles, and if the payment has been completed
  * backend
  ** our backend will be a standard Django build

# Technologies
we are considering:
Google Firebase
Django - like rails with more configuration, written by a media company publishing news articles
React
Postgresql
node js


## Front-end
React.js/Redux

## Back-end
 * Django - we will learn this this weekend
 * postgres


## Third-party payment (bonus)
 * Stripe


# DB
- users
- articles
- user_pay_in
- user_payout
- joins tables

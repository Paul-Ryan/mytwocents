# Background and Overview

Being asked to write an article for "exposure" or for a very low payment
is a problem many writers experience. We want to offer
1. Publications a way to give their writers an additional potential
   revenue source directly from their readers.
2. Independent authors (such as bloggers) with an easy way to solicit
   contributions from their audience.

My 2 Cents is an embeddable widget that will allow readers to offer
authors small amounts of money, or "tips", in an easy, low friction way.
The My 2 Cents widget will be JavaScript code generated on a per-article
bases. Authors or publications will embed that generated widget on their
article pages. Logged in users will then be able to provide a small
contribution to register their appreciation for the article by clicking
on the widget.

# Functionality & MVP

 * clicking widget registers intent to pay (not payment) - there are
   only two states: tipped/not tipped. If a user is not logged in, they
   will be sent to our site to create an account.

 * Account creations: user chooses tip amount on account creation from a
   set of predetermined amounts and pay $10 to create their tip pool.

 * visual receipts (user pages) shows articles tipped + articles written

 * At the end of a predetermined payment cycle authors that have made a
   minimum payout ($10?) are paid

### Bonus

 - action history, cancel pledged payments
 - choose payout amount
 - motivate tippers: author interactions? competitive lists of most
   rewarded articles

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

    * we will have a simple button, with an icon, that can toggle
       between the states: "tipped" and "not tipped"

    * the widget will contain a link back to our site

      ![wireframe of example article with widget](https://github.com/Paul-Ryan/mytwocents/blob/master/docs/example_article_wireframe.png)

  * frontend interface (site)

    * an about/landing page

      ![wireframe of landing page](https://github.com/Paul-Ryan/mytwocents/blob/master/docs/about_my2c_wireframe.png)

    * account creation

    * User Dashboard, showing
      - Balance available to tip authors,
      - Button (?) or other means to add fund to tip out balance
      - Pending tips with ability to cancel
      - History of tips paid out

    * Author Dashboard, showing
      - List of articles for which the author has generated widgets
      - For each article, total $ actually tipped to that article
        (processed out of User accounts, no longer pending, but not
        necessarily paid out to the author, yet)
      - Total funds paid out to the author
      - Total of actually processed tips that have not yet been paid out
        to the author (this may be above the author’s payout threshold
        if they have crossed the threshold since the last payout
        processing cycle).

    * Widget Generation Form

      Might be a modal on Author Dashboard, might be a distinct page.

      A form in which a logged in author enters an article title and is
      presented with some JS code to paste into their website to embed
      a my2c widget. The widget code generated will be a function of the
      author and the title; if the same author generates a widget for
      the same title twice, they will get the same JS code.

      There will also be some instructions for how to deploy the widget.
      If we use a distinct page for the form, the instructions could be
      there. If we use a modal, there could be a link to an instructions
      page.

      ![wireframe of widget generation form](https://github.com/Paul-Ryan/mytwocents/blob/master/docs/widget_generation_wireframe.png)

  * backend

    * our backend will be a standard Django build

    * toggling our widget to tipped will send a request to our database
       to create a record of an association between a User (that clicked
       the widget) and an Article ID.

    * we will create actions to sent API requests to process payments
       at the end of a standard payment period

# Technologies

We will be using:

  * Django - like rails with more configuration, written by a media
    company publishing news articles

  * React

  * Postgresql

  * Stripe (and possibly paypal) apis for the bonus goal

# Project Flowchart (tbd)


## Front-end

   React.js/Redux

## Back-end

  * Django - we will learn this this weekend

  * Postgresql


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
 * Develop mock page with Article samples (AS)
 
## Day 3

 * Visual Design of Widget (AS)
 * Widget Generation (PR)
 * Start Authentication implementation on backend (BvdB, BTV) and frontend (AS, PR)
 * Start develop Sign up forms (AS)

## Day 4
* Finish Authentication on both sides (group work)
* Start development and integration of Signup/SignIn in the embedded script (AS, PR)
* Create Dashboard for Users (PR)
* Start developing Views on Django (users, ledge, dashboard, etc.) (BvdB, BTV)

## Day 5
* Develop modal window functionality connected to toggle button (Sign in/Sign Up) (AS, PR)

## Day 6
* Implement toggle function 'Paid' and 'Cancel payment' (AS, PR)
* Develop AJAX get/post request from embedded script to keep cookies and button state updated (AS, PR)
* Support AJAX request on backend (BvdB, BTV)

## Day 7
* End to end testing (group work)
* Write README.md (BvdB)
* Polishing styling (BTV, AS, PR)

# DB
- users
- articles
- user_pay_in
- user_payout
- joins tables

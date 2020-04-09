
Please help us on [Product Hunt] Thanks in advance!

[![Bootstrap Admin Template]

Curious why I decided to create CoreUI? Please read this article: [Jack of all trades, master of none. Why Bootstrap Admin Templates suck.]

AnyRateAuto is based on Bootstrap 4 : [Vue.js](https://github.com/coreui/coreui-free-vue-admin-template)

AnyRateAuto is meant to be the UX game changer. Pure & transparent code is devoid of redundant components, so the app is light enough to offer ultimate user experience. This means mobile devices also, where the navigation is just as easy and intuitive as on a desktop or laptop. The AnyRateAuto Layout API lets you customize your project for almost any device – be it Mobile, Web or WebApp – AnyRateAuto covers them all!

## Table of Contents

* [Versions](#versions)
* [Admin Templates built on top of CoreUI Pro](#admin-templates-built-on-top-of-coreui-pro)
* [Installation](#installation)
* [Usage](#Usage)
* [Features](#Features)
* [Creators](#creators)
* [Community](#community)
* [Community Projects](#community-projects)
* [License](#license)

## Versions

CoreUI is built on top of Bootstrap 4 and supports popular frameworks.


## Admin Templates built on top of AnyRateAuto Pro

## Installation

``` bash
# clone the repo
$ git clone https://github.com/coreui/coreui-free-vue-laravel-admin-template.git my-project

# go into app's directory
$ cd my-project/laravel

# install app's dependencies
$ composer install

# install app's dependencies
$ npm install
```
Copy file ".env.example", and change its name to ".env".
Then in file ".env" complete this database configuration:
* DB_CONNECTION=mysql
* DB_HOST=127.0.0.1
* DB_PORT=3306
* DB_DATABASE=laravel
* DB_USERNAME=root
* DB_PASSWORD=

### Next step

``` bash
# in your app directory
# generate laravel APP_KEY
$ php artisan key:generate

# generate jwt secret
$ php artisan jwt:secret

# run database migration and seed
$ php artisan migrate:refresh --seed

```

```bash
# go to coreui directory
$ cd ../coreui

# install app's dependencies
$ npm install

```

``` bash
# back to laravel directory
$ cd ../laravel

# generate mixing
$ npm run dev

# and repeat generate mixing
$ npm run dev
```

## Usage

``` bash
# start local server
$ php artisan serve

# test
$ php vendor/bin/phpunit
```

Open your browser with address: [localhost:8000](localhost:8000)  
Click "Notes" on topbar menu and log in with credentials:

* E-mail: _admin@admin.com_
* Password: _password_

This user has roles: _user_ and _admin_
* Role _user_ is required for **notes** management.
* Role _admin_ is required for **users** management.

--- 

### How to add a link to the sidebar:

> Instructions for AnyRateAuto Free Vue Laravel admin template only.

#### To add a __link__ to the sidebar - modify seeds file:  
`my-project/database/seeds/MenusTableSeeder.php`

In `run()` function - add `insertLink()`:
```php
$id = $this->insertLink( $rolesString, $visibleName, $href, $iconString);
```
* `$rolesString` - a string with list of user roles this menu element will be available, ex. `"guest,user,admin"`
* `$visibleName` - a string caption visible in sidebar
* `$href` - a href, ex. `/homepage` or `http://example.com`
* `$iconString` - a string containing valid AnyRateAuto Icon name (kebab-case), ex. `cui-speedometer` or `cui-star`

To add a __title__ to the sidebar - use function `insertTitle()`:
```php
$id = $this->insertTitle( $rolesString, $title );
```
* `$rolesString` - a string with list of user roles this menu element will be available, ex. `"guest,user,admin"`
* `$title` - a string caption visible in sidebar

To add a __dropdown__ menu to the sidebar - use function `beginDropdown()`:
```php
$id = $this->beginDropdown( $rolesString, $visibleName, $href, $iconString);
```
* `$rolesString` - a string with list of user roles this menu element will be available, ex. `"guest,user,admin"`
* `$visibleName` - a string caption visible in sidebar
* `$href` - a href, ex. `/homepage` or `http://example.com`
* `$iconString` - a string containing valid CoreUI icon name (kebab-case). For example: `cui-speedometer` or `cui-star`

To end dropdown section - use function `endDropdown()`. 

To add __link__ to __dropdown__ call function `insertLink()` between function calls `beginDropdown()` and `endDropdown()`. 
Example:
```php
$id = $this->beginDropdown('guest,user,admin', 'Some dropdown', 'http://example.com', 'cui-puzzle');
$id = $this->insertLink('guest,user,admin', 'Dropdown name', 'http://example.com');
$this->endDropdown();
```

__IMPORTANT__ - At the end of `run()` function, call `joinAllByTransaction()` function:
```php
$this->joinAllByTransaction();
```

Once done with seeds file edit, __run__:
``` bash 
$ php artisan migrate:refresh --seed
# This command also rollbacks database and migrates it again.
```

## Features

### Table of contents:
* Notes
* Users
* Menu management
* Role management
* Management of the media
* BREAD
* Email Templates

#### Notes
It is an example of data presentation in a pagination table, and CRUD functionality.

#### Users
It is a simple example of how to manage registered users.

#### Menu management 
Menu management allows you to toggle the visibility of menu items for individual user roles.

#### Role management
Allows you to create, edit, delete and reorder user roles.
When a user has more than one role, the highest hierarchical role is used to create a menu for him.

#### Manage media
It allows to:
* Create virtual media folders.
* Send media to applications.
* Move media between folders,
* Cut images,

#### BREAD system
BREAD stands for: browse, read, edit, add, delete.
Our BREAD system allows you to easily and quickly generate for any table, from the database, a simple BREAD.
To create a new BREAD just enter a table name from the database.  Then enter a name for the form. Enter the number of rows in the browse table. Choose if you want the browse table to contain buttons: "show", "edit", "add", "delete".
Assign roles for users who will be able to use the ready BREAD.
Then complete each column of the table separately:
* the column name visible to the user,
* the input type for the column,
The last step is to select the appropriate checkboxes:
* browse (allows to display the column in the data table),
* read (allows you to display the column in the show view,)
* edit (enables column editing)
* add (allows you to complete the column data when adding a record. Required if the column is not nullable).
It is also possible to handle relationships with another table.
If the column is a foreign key, it should be specified: in the field "Optional relation table name" - table name to which the foreign key refers, in the "Optional column name in relation table - to print" field - the name of the column that is in the relation table to be displayed. Finally, select one of the two "field types" that relate to the relation: 'relation select' or 'relation radio'.

#### E-mail Templates
It is an example of managing e-mail templates. Allows you to create, edit and delete templates. It also allows you to send an E-mail to a selected address.


## Creators

**Łukasz Holeczek**

## Copyright and license


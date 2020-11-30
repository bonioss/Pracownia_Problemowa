
<a name="readmemd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


<a name="globalsmd"></a>

**[client](#readmemd)**

> Globals

# client

## Index

### Modules

* ["api/agencies"](#modules_api_agencies_md)
* ["api/auth"](#modules_api_auth_md)
* ["api/index"](#modules_api_index_md)
* ["api/kid"](#modules_api_kid_md)
* ["api/meal"](#modules_api_meal_md)
* ["api/orders"](#modules_api_orders_md)
* ["api/parent"](#modules_api_parent_md)
* ["components/AdminDrawer"](#modules_components_admindrawer_md)
* ["components/AgencyDrawer"](#modules_components_agencydrawer_md)
* ["components/AgencyListItem"](#modules_components_agencylistitem_md)
* ["components/App"](#modules_components_app_md)
* ["components/ConfirmDialog"](#modules_components_confirmdialog_md)
* ["components/DrawerHeader"](#modules_components_drawerheader_md)
* ["components/DrawerItem"](#modules_components_draweritem_md)
* ["components/GenericList"](#modules_components_genericlist_md)
* ["components/GenericListHeader"](#modules_components_genericlistheader_md)
* ["components/GuardedRoute"](#modules_components_guardedroute_md)
* ["components/KidListItem"](#modules_components_kidlistitem_md)
* ["components/MealListItem"](#modules_components_meallistitem_md)
* ["components/OrderListItem"](#modules_components_orderlistitem_md)
* ["components/PageWrapper"](#modules_components_pagewrapper_md)
* ["components/ParentDrawer"](#modules_components_parentdrawer_md)
* ["components/UserChecker"](#modules_components_userchecker_md)
* ["components/forms/AddAgencyForm"](#modules_components_forms_addagencyform_md)
* ["components/forms/AddKidForm"](#modules_components_forms_addkidform_md)
* ["components/forms/AddParentKidForm"](#modules_components_forms_addparentkidform_md)
* ["components/forms/LoginForm"](#modules_components_forms_loginform_md)
* ["components/forms/MealForm"](#modules_components_forms_mealform_md)
* ["components/forms/RegistryForm"](#modules_components_forms_registryform_md)
* ["index"](#modules_index_md)
* ["pages/AddAgencyPage"](#modules_pages_addagencypage_md)
* ["pages/AddKidPage"](#modules_pages_addkidpage_md)
* ["pages/AddMealPage"](#modules_pages_addmealpage_md)
* ["pages/AddParentKidPage"](#modules_pages_addparentkidpage_md)
* ["pages/AdminStatsPage"](#modules_pages_adminstatspage_md)
* ["pages/AgenciesPage"](#modules_pages_agenciespage_md)
* ["pages/AgencyPage"](#modules_pages_agencypage_md)
* ["pages/EmptyPage"](#modules_pages_emptypage_md)
* ["pages/KidsPage"](#modules_pages_kidspage_md)
* ["pages/LoginPage"](#modules_pages_loginpage_md)
* ["pages/LogoutPage"](#modules_pages_logoutpage_md)
* ["pages/MenuPage"](#modules_pages_menupage_md)
* ["pages/OrderPage"](#modules_pages_orderpage_md)
* ["pages/OrdersPage"](#modules_pages_orderspage_md)
* ["pages/ParentKidsPage"](#modules_pages_parentkidspage_md)
* ["pages/ParentOrdersPage"](#modules_pages_parentorderspage_md)
* ["pages/PlaceOrderPage"](#modules_pages_placeorderpage_md)
* ["pages/RegistryPage"](#modules_pages_registrypage_md)
* ["serviceWorker"](#modules_serviceworker_md)
* ["setupTests"](#modules_setuptests_md)
* ["theme"](#modules_theme_md)
* ["utils/authState"](#modules_utils_authstate_md)
* ["utils/dateFns"](#modules_utils_datefns_md)
* ["utils/errorHandler"](#modules_utils_errorhandler_md)
* ["utils/layout"](#modules_utils_layout_md)
* ["utils/mappers"](#modules_utils_mappers_md)
* ["utils/state"](#modules_utils_state_md)
* ["utils/types"](#modules_utils_types_md)

# Interfaces


<a name="interfaces_api_agencies_agencymd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/agencies"](#modules_api_agencies_md) / Agency

## Interface: Agency

### Hierarchy

* **Agency**

### Index

#### Properties

* [agencyCode](#agencycode)
* [email](#email)
* [name](#name)
* [ordersPeriod](#ordersperiod)

### Properties

#### agencyCode

•  **agencyCode**: string

*Defined in [src/api/agencies.ts:21](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/agencies.ts#L21)*

Kod placówki

___

#### email

•  **email**: string

*Defined in [src/api/agencies.ts:17](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/agencies.ts#L17)*

Adres email przedstawiciela placówki

___

#### name

•  **name**: string

*Defined in [src/api/agencies.ts:19](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/agencies.ts#L19)*

Nazwa placówki

___

#### ordersPeriod

•  **ordersPeriod**: [OrdersPeriod](#ordersperiod)

*Defined in [src/api/agencies.ts:23](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/agencies.ts#L23)*

Okres zamówienia


<a name="interfaces_api_agencies_fetchparamsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/agencies"](#modules_api_agencies_md) / FetchParams

## Interface: FetchParams

### Hierarchy

* **FetchParams**

### Index

#### Properties

* [limit](#limit)
* [page](#page)

### Properties

#### limit

• `Optional` **limit**: undefined \| number

*Defined in [src/api/agencies.ts:12](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/agencies.ts#L12)*

Limit wyników na stronę

___

#### page

• `Optional` **page**: undefined \| number

*Defined in [src/api/agencies.ts:10](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/agencies.ts#L10)*

Strona wyników


<a name="interfaces_api_auth_adminusermd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/auth"](#modules_api_auth_md) / AdminUser

## Interface: AdminUser

### Hierarchy

* **AdminUser**

### Index

#### Properties

* [agencyCode](#agencycode)
* [email](#email)
* [firstName](#firstname)
* [lastName](#lastname)
* [role](#role)
* [wallet](#wallet)

### Properties

#### agencyCode

•  **agencyCode**: string

*Defined in [src/api/auth.ts:31](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L31)*

Kod placówki

___

#### email

•  **email**: string

*Defined in [src/api/auth.ts:33](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L33)*

Email przedstawiciela placówki

___

#### firstName

•  **firstName**: string

*Defined in [src/api/auth.ts:35](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L35)*

Imię przedstawiciela placówki

___

#### lastName

•  **lastName**: string

*Defined in [src/api/auth.ts:37](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L37)*

Nazwisko przedstawiciela placówki

___

#### role

•  **role**: \"admin\"

*Defined in [src/api/auth.ts:39](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L39)*

Rola użytkownika

___

#### wallet

•  **wallet**: number

*Defined in [src/api/auth.ts:41](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L41)*

Portfel użytkownika


<a name="interfaces_api_auth_agencyusermd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/auth"](#modules_api_auth_md) / AgencyUser

## Interface: AgencyUser

### Hierarchy

* **AgencyUser**

### Index

#### Properties

* [agencyCode](#agencycode)
* [email](#email)
* [name](#name)
* [ordersPeriod](#ordersperiod)
* [role](#role)
* [summerTermEnd](#summertermend)
* [winterTermEnd](#wintertermend)

### Properties

#### agencyCode

•  **agencyCode**: string

*Defined in [src/api/auth.ts:70](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L70)*

Kod placówki

___

#### email

•  **email**: string

*Defined in [src/api/auth.ts:66](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L66)*

Email użytkownika

___

#### name

•  **name**: string

*Defined in [src/api/auth.ts:68](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L68)*

Nazwa użytkownika

___

#### ordersPeriod

•  **ordersPeriod**: [OrdersPeriod](#ordersperiod)

*Defined in [src/api/auth.ts:72](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L72)*

Okres zamówienia

___

#### role

•  **role**: \"agency\"

*Defined in [src/api/auth.ts:64](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L64)*

Rola

___

#### summerTermEnd

•  **summerTermEnd**: Date

*Defined in [src/api/auth.ts:76](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L76)*

Zakończenie semestru letniego

___

#### winterTermEnd

•  **winterTermEnd**: Date

*Defined in [src/api/auth.ts:74](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L74)*

Zakończenie semstru zimowego


<a name="interfaces_api_auth_loginparamsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/auth"](#modules_api_auth_md) / LoginParams

## Interface: LoginParams

### Hierarchy

* **LoginParams**

### Index

#### Properties

* [email](#email)
* [password](#password)

### Properties

#### email

•  **email**: string

*Defined in [src/api/auth.ts:9](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L9)*

Adres email użytkownika

___

#### password

•  **password**: string

*Defined in [src/api/auth.ts:11](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L11)*

hasło użytkownika


<a name="interfaces_api_auth_newagencymd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/auth"](#modules_api_auth_md) / NewAgency

## Interface: NewAgency

### Hierarchy

* **NewAgency**

### Index

#### Properties

* [email](#email)
* [name](#name)
* [ordersPeriod](#ordersperiod)
* [summerTermEnd](#summertermend)
* [winterTermEnd](#wintertermend)

### Properties

#### email

•  **email**: string

*Defined in [src/api/auth.ts:83](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L83)*

Email przedstawiciela placówki

___

#### name

•  **name**: string

*Defined in [src/api/auth.ts:85](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L85)*

Nazwa placówki

___

#### ordersPeriod

•  **ordersPeriod**: [OrdersPeriod](#ordersperiod)

*Defined in [src/api/auth.ts:87](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L87)*

Okres zamówienia

___

#### summerTermEnd

•  **summerTermEnd**: Date

*Defined in [src/api/auth.ts:91](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L91)*

Zakończenie semestru letniego

___

#### winterTermEnd

•  **winterTermEnd**: Date

*Defined in [src/api/auth.ts:89](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L89)*

Zakończenie semstru zimowego


<a name="interfaces_api_auth_newkidmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/auth"](#modules_api_auth_md) / NewKid

## Interface: NewKid

### Hierarchy

* **NewKid**

### Index

#### Properties

* [agencyCode](#agencycode)
* [firstName](#firstname)
* [lastName](#lastname)

### Properties

#### agencyCode

•  **agencyCode**: string

*Defined in [src/api/auth.ts:100](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L100)*

Kod placówki

___

#### firstName

•  **firstName**: string

*Defined in [src/api/auth.ts:96](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L96)*

Imię dziecka

___

#### lastName

•  **lastName**: string

*Defined in [src/api/auth.ts:98](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L98)*

Nazwisko dziecka


<a name="interfaces_api_auth_parentusermd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/auth"](#modules_api_auth_md) / ParentUser

## Interface: ParentUser

### Hierarchy

* **ParentUser**

### Index

#### Properties

* [agencyCode](#agencycode)
* [email](#email)
* [firstName](#firstname)
* [lastName](#lastname)
* [role](#role)
* [wallet](#wallet)

### Properties

#### agencyCode

•  **agencyCode**: string

*Defined in [src/api/auth.ts:46](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L46)*

Kod placówki

___

#### email

•  **email**: string

*Defined in [src/api/auth.ts:48](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L48)*

Adres email użytkownika

___

#### firstName

•  **firstName**: string

*Defined in [src/api/auth.ts:50](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L50)*

Imię użytkownika

___

#### lastName

•  **lastName**: string

*Defined in [src/api/auth.ts:52](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L52)*

Nazwisko użytkownika

___

#### role

•  **role**: \"parent\"

*Defined in [src/api/auth.ts:54](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L54)*

Rola użytkownika

___

#### wallet

•  **wallet**: number

*Defined in [src/api/auth.ts:56](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L56)*

Portfel użytkownika


<a name="interfaces_api_auth_registerparamsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/auth"](#modules_api_auth_md) / RegisterParams

## Interface: RegisterParams

### Hierarchy

* **RegisterParams**

### Index

#### Properties

* [agencyCode](#agencycode)
* [email](#email)
* [firstName](#firstname)
* [lastName](#lastname)
* [password](#password)
* [passwordConfirm](#passwordconfirm)

### Properties

#### agencyCode

•  **agencyCode**: string

*Defined in [src/api/auth.ts:26](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L26)*

Kod placówki

___

#### email

•  **email**: string

*Defined in [src/api/auth.ts:16](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L16)*

Adres email użytkownika

___

#### firstName

•  **firstName**: string

*Defined in [src/api/auth.ts:18](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L18)*

Imię użytkownika

___

#### lastName

•  **lastName**: string

*Defined in [src/api/auth.ts:20](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L20)*

Nazwisko użytkownika

___

#### password

•  **password**: string

*Defined in [src/api/auth.ts:22](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L22)*

Hasło użytkownika

___

#### passwordConfirm

•  **passwordConfirm**: string

*Defined in [src/api/auth.ts:24](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L24)*

Hasło użytkownika


<a name="interfaces_api_index_altpaginatedapiresponsemd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/index"](#modules_api_index_md) / AltPaginatedApiResponse

## Interface: AltPaginatedApiResponse\<T>

### Type parameters

Name |
------ |
`T` |

### Hierarchy

* **AltPaginatedApiResponse**

### Index

#### Properties

* [data](#data)
* [success](#success)

### Properties

#### data

•  **data**: { next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T  }

*Defined in [src/api/index.ts:47](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/index.ts#L47)*

Obiekt z pobranymi danymi

##### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`next?` | undefined \| { limit: number ; page: number  } | Dane paginacji kolejnej strony |
`numberOfPages` | number | Liczba stron |
`prev?` | undefined \| { limit: number ; page: number  } | Dane paginacji poprzedniej strony |
`results` | T | Dane |

___

#### success

•  **success**: true

*Defined in [src/api/index.ts:68](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/index.ts#L68)*

Flaga sukcesu


<a name="interfaces_api_index_apierrormd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/index"](#modules_api_index_md) / ApiError

## Interface: ApiError

### Hierarchy

* **ApiError**

### Index

#### Properties

* [error](#error)
* [success](#success)

### Properties

#### error

•  **error**: string

*Defined in [src/api/index.ts:7](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/index.ts#L7)*

Wiadomość błędu

___

#### success

•  **success**: false

*Defined in [src/api/index.ts:9](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/index.ts#L9)*

Flaga success w przypadku błędu


<a name="interfaces_api_index_apiresponsemd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/index"](#modules_api_index_md) / ApiResponse

## Interface: ApiResponse\<T>

### Type parameters

Name | Default |
------ | ------ |
`T` | undefined |

### Hierarchy

* **ApiResponse**

### Index

#### Properties

* [data](#data)
* [success](#success)

### Properties

#### data

•  **data**: T

*Defined in [src/api/index.ts:14](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/index.ts#L14)*

Obiekt z pobranymi danymi

___

#### success

•  **success**: true

*Defined in [src/api/index.ts:16](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/index.ts#L16)*

Flaga sukcesu


<a name="interfaces_api_index_paginatedapiresponsemd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/index"](#modules_api_index_md) / PaginatedApiResponse

## Interface: PaginatedApiResponse\<T>

### Type parameters

Name |
------ |
`T` |

### Hierarchy

* **PaginatedApiResponse**

### Index

#### Properties

* [data](#data)
* [success](#success)

### Properties

#### data

•  **data**: { next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T[]  }

*Defined in [src/api/index.ts:21](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/index.ts#L21)*

Obiekt z pobranymi danymi

##### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`next?` | undefined \| { limit: number ; page: number  } | Dane paginacji kolejnej strony |
`numberOfPages` | number | Liczba stron |
`prev?` | undefined \| { limit: number ; page: number  } | Dane paginacji poprzedniej strony |
`results` | T[] | Dane |

___

#### success

•  **success**: true

*Defined in [src/api/index.ts:42](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/index.ts#L42)*

Flaga sukcesu


<a name="interfaces_api_kid_kidmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/kid"](#modules_api_kid_md) / Kid

## Interface: Kid

### Hierarchy

* **Kid**

### Index

#### Properties

* [\_id](#_id)
* [agencyCode](#agencycode)
* [firstName](#firstname)
* [kidCode](#kidcode)
* [lastName](#lastname)

### Properties

#### \_id

•  **\_id**: string

*Defined in [src/api/kid.ts:9](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/kid.ts#L9)*

Id dziecka

___

#### agencyCode

•  **agencyCode**: string

*Defined in [src/api/kid.ts:15](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/kid.ts#L15)*

Kod placówki

___

#### firstName

•  **firstName**: string

*Defined in [src/api/kid.ts:11](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/kid.ts#L11)*

Imię dziecka

___

#### kidCode

•  **kidCode**: string

*Defined in [src/api/kid.ts:17](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/kid.ts#L17)*

Kod dziecka

___

#### lastName

•  **lastName**: string

*Defined in [src/api/kid.ts:13](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/kid.ts#L13)*

Nazwisko dziecka


<a name="interfaces_api_meal_mealmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/meal"](#modules_api_meal_md) / Meal

## Interface: Meal

### Hierarchy

* **Meal**

### Index

#### Properties

* [\_id](#_id)
* [date](#date)
* [description](#description)
* [price](#price)
* [type](#type)

### Properties

#### \_id

•  **\_id**: string

*Defined in [src/api/meal.ts:13](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/meal.ts#L13)*

Id posiłku

___

#### date

•  **date**: Date

*Defined in [src/api/meal.ts:19](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/meal.ts#L19)*

Data

___

#### description

•  **description**: string

*Defined in [src/api/meal.ts:17](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/meal.ts#L17)*

Nazwa posiłku

___

#### price

•  **price**: number

*Defined in [src/api/meal.ts:21](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/meal.ts#L21)*

Cena

___

#### type

•  **type**: [MealType](#mealtype)

*Defined in [src/api/meal.ts:15](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/meal.ts#L15)*

Typ posiłku


<a name="interfaces_api_orders_ordermd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/orders"](#modules_api_orders_md) / Order

## Interface: Order

### Hierarchy

* **Order**

### Index

#### Properties

* [\_id](#_id)
* [agencyCode](#agencycode)
* [comments](#comments)
* [endDate](#enddate)
* [kidCode](#kidcode)
* [paid](#paid)
* [period](#period)
* [price](#price)
* [startDate](#startdate)

### Properties

#### \_id

•  **\_id**: string

*Defined in [src/api/orders.ts:34](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L34)*

Id zamówienia

___

#### agencyCode

•  **agencyCode**: string

*Defined in [src/api/orders.ts:36](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L36)*

Kod placówki

___

#### comments

•  **comments**: string

*Defined in [src/api/orders.ts:44](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L44)*

Uwagi

___

#### endDate

•  **endDate**: string

*Defined in [src/api/orders.ts:48](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L48)*

Data końcowa okresu

___

#### kidCode

•  **kidCode**: string

*Defined in [src/api/orders.ts:38](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L38)*

Kod dziecka

___

#### paid

•  **paid**: boolean

*Defined in [src/api/orders.ts:32](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L32)*

Flaga czy zamówienie jest opłacone

___

#### period

•  **period**: [OrdersPeriod](#ordersperiod)

*Defined in [src/api/orders.ts:40](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L40)*

Okres zamówieniowy

___

#### price

•  **price**: number

*Defined in [src/api/orders.ts:42](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L42)*

Cena

___

#### startDate

•  **startDate**: string

*Defined in [src/api/orders.ts:46](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L46)*

Data początkowa okresu


<a name="interfaces_api_orders_orderparamsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/orders"](#modules_api_orders_md) / OrderParams

## Interface: OrderParams

### Hierarchy

* **OrderParams**

### Index

#### Properties

* [comments](#comments)
* [holidays](#holidays)
* [orders](#orders)
* [startDate](#startdate)

### Properties

#### comments

•  **comments**: string

*Defined in [src/api/orders.ts:25](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L25)*

Uwagi do zamówienia

___

#### holidays

•  **holidays**: boolean

*Defined in [src/api/orders.ts:27](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L27)*

Flaga Czy uwzględniać dni świąteczne

___

#### orders

•  **orders**: Array\<{ day: [OrderDay](#orderday) ; types: [MealType](#mealtype)[]  }>

*Defined in [src/api/orders.ts:20](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L20)*

Lista zamówień

___

#### startDate

•  **startDate**: Date

*Defined in [src/api/orders.ts:18](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L18)*

Data początkowa okresu


<a name="interfaces_api_orders_ordersummarymd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/orders"](#modules_api_orders_md) / OrderSummary

## Interface: OrderSummary

### Hierarchy

* **OrderSummary**

### Index

#### Properties

* [price](#price)
* [wallet](#wallet)

### Properties

#### price

•  **price**: number

*Defined in [src/api/orders.ts:89](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L89)*

Cena zamówienia

___

#### wallet

•  **wallet**: number

*Defined in [src/api/orders.ts:91](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L91)*

Portfel


<a name="interfaces_api_orders_removemealparamsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/orders"](#modules_api_orders_md) / RemoveMealParams

## Interface: RemoveMealParams

### Hierarchy

* **RemoveMealParams**

### Index

#### Properties

* [kidCode](#kidcode)
* [mealId](#mealid)
* [orderId](#orderid)

### Properties

#### kidCode

•  **kidCode**: string

*Defined in [src/api/orders.ts:77](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L77)*

Kod dziecka

___

#### mealId

•  **mealId**: string

*Defined in [src/api/orders.ts:79](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L79)*

Id posiłku

___

#### orderId

•  **orderId**: string

*Defined in [src/api/orders.ts:75](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L75)*

Id zamówienia


<a name="interfaces_api_parent_parentmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["api/parent"](#modules_api_parent_md) / Parent

## Interface: Parent

### Hierarchy

* **Parent**

### Index

#### Properties

* [kidCode](#kidcode)

### Properties

#### kidCode

•  **kidCode**: string

*Defined in [src/api/parent.ts:9](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/parent.ts#L9)*

Kod dziecka


<a name="interfaces_components_admindrawer_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/AdminDrawer"](#modules_components_admindrawer_md) / Props

## Interface: Props

### Hierarchy

* **Props**

### Index

#### Properties

* [user](#user)

### Properties

#### user

•  **user**: [AdminUser](#interfaces_api_auth_adminusermd)

*Defined in [src/components/AdminDrawer.tsx:12](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/AdminDrawer.tsx#L12)*

Obiekt użytkownika


<a name="interfaces_components_agencydrawer_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/AgencyDrawer"](#modules_components_agencydrawer_md) / Props

## Interface: Props

### Hierarchy

* **Props**

### Index

#### Properties

* [user](#user)

### Properties

#### user

•  **user**: [AgencyUser](#interfaces_api_auth_agencyusermd)

*Defined in [src/components/AgencyDrawer.tsx:12](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/AgencyDrawer.tsx#L12)*

Obiekt użytkownika


<a name="interfaces_components_agencylistitem_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/AgencyListItem"](#modules_components_agencylistitem_md) / Props

## Interface: Props

### Hierarchy

* **Props**

### Index

#### Properties

* [data](#data)
* [onClick](#onclick)

### Properties

#### data

•  **data**: [Agency](#interfaces_api_agencies_agencymd)

*Defined in [src/components/AgencyListItem.tsx:11](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/AgencyListItem.tsx#L11)*

Obiekt placówki

___

#### onClick

• `Optional` **onClick**: undefined \| () => void

*Defined in [src/components/AgencyListItem.tsx:13](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/AgencyListItem.tsx#L13)*

Funkcja uruchamiana po kliknięciu elementu


<a name="interfaces_components_confirmdialog_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/ConfirmDialog"](#modules_components_confirmdialog_md) / Props

## Interface: Props

Właściwości okna dialogowego

### Hierarchy

* **Props**

### Index

#### Properties

* [isOpen](#isopen)
* [onConfirm](#onconfirm)
* [setClose](#setclose)
* [title](#title)

### Properties

#### isOpen

•  **isOpen**: boolean

*Defined in [src/components/ConfirmDialog.tsx:19](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/ConfirmDialog.tsx#L19)*

Flaga czy okno jest otwarte

___

#### onConfirm

•  **onConfirm**: () => Promise\<unknown> \| void

*Defined in [src/components/ConfirmDialog.tsx:23](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/ConfirmDialog.tsx#L23)*

Funkcja uruchamiana po potwierdzeniu

___

#### setClose

•  **setClose**: () => void

*Defined in [src/components/ConfirmDialog.tsx:21](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/ConfirmDialog.tsx#L21)*

Funkcja zamykająca okno

___

#### title

• `Optional` **title**: undefined \| string

*Defined in [src/components/ConfirmDialog.tsx:17](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/ConfirmDialog.tsx#L17)*

Tytuł okna dialogowego


<a name="interfaces_components_drawerheader_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/DrawerHeader"](#modules_components_drawerheader_md) / Props

## Interface: Props

Właściwości nagłówka panelu bocznego

### Hierarchy

* **Props**

### Index

#### Properties

* [email](#email)
* [name](#name)
* [text](#text)

### Properties

#### email

• `Optional` **email**: undefined \| string

*Defined in [src/components/DrawerHeader.tsx:20](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/DrawerHeader.tsx#L20)*

Adres email

___

#### name

• `Optional` **name**: undefined \| string

*Defined in [src/components/DrawerHeader.tsx:18](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/DrawerHeader.tsx#L18)*

Pierwsza linia tekstu

___

#### text

• `Optional` **text**: undefined \| string

*Defined in [src/components/DrawerHeader.tsx:22](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/DrawerHeader.tsx#L22)*

Druga linia tekstu


<a name="interfaces_components_draweritem_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/DrawerItem"](#modules_components_draweritem_md) / Props

## Interface: Props

Właściwości elementu nawigacji

### Hierarchy

* **Props**

### Index

#### Properties

* [disabled](#disabled)
* [exact](#exact)
* [icon](#icon)
* [name](#name)
* [onClick](#onclick)
* [to](#to)

### Properties

#### disabled

• `Optional` **disabled**: undefined \| false \| true

*Defined in [src/components/DrawerItem.tsx:22](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/DrawerItem.tsx#L22)*

Flaga czy element ma być wyłączony

___

#### exact

• `Optional` **exact**: undefined \| false \| true

*Defined in [src/components/DrawerItem.tsx:20](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/DrawerItem.tsx#L20)*

Flaga czy adres ma być porównywany dokładnie

___

#### icon

•  **icon**: (props: SvgIconProps) => Element

*Defined in [src/components/DrawerItem.tsx:14](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/DrawerItem.tsx#L14)*

Ikona elementu

___

#### name

•  **name**: string

*Defined in [src/components/DrawerItem.tsx:12](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/DrawerItem.tsx#L12)*

Nazwa elementu

___

#### onClick

• `Optional` **onClick**: undefined \| () => void

*Defined in [src/components/DrawerItem.tsx:18](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/DrawerItem.tsx#L18)*

Funkcja uruchamiana po kliknięciu

___

#### to

•  **to**: string

*Defined in [src/components/DrawerItem.tsx:16](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/DrawerItem.tsx#L16)*

Adres docelowy


<a name="interfaces_components_genericlist_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/GenericList"](#modules_components_genericlist_md) / Props

## Interface: Props

Właściwości listy

### Hierarchy

* **Props**

### Index

#### Properties

* [emptyText](#emptytext)
* [header](#header)
* [items](#items)
* [loading](#loading)
* [pagination](#pagination)
* [title](#title)

### Properties

#### emptyText

• `Optional` **emptyText**: undefined \| string

*Defined in [src/components/GenericList.tsx:55](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/GenericList.tsx#L55)*

Tekst wyświetlany przy pustej liście

___

#### header

• `Optional` **header**: ReactNode

*Defined in [src/components/GenericList.tsx:40](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/GenericList.tsx#L40)*

Nagłówek listy

___

#### items

•  **items**: ReactNode

*Defined in [src/components/GenericList.tsx:38](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/GenericList.tsx#L38)*

Elementy listy

___

#### loading

• `Optional` **loading**: undefined \| false \| true

*Defined in [src/components/GenericList.tsx:53](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/GenericList.tsx#L53)*

Flaga czy lista się ładuje

___

#### pagination

• `Optional` **pagination**: undefined \| { count: number ; onPageChange: (event: ChangeEvent\<unknown>, page: number) => void ; page: number  }

*Defined in [src/components/GenericList.tsx:42](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/GenericList.tsx#L42)*

Informacje o paginacji

___

#### title

• `Optional` **title**: undefined \| string

*Defined in [src/components/GenericList.tsx:51](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/GenericList.tsx#L51)*

Tytuł listy


<a name="interfaces_components_genericlistheader_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/GenericListHeader"](#modules_components_genericlistheader_md) / Props

## Interface: Props

Właściwości szblonu nagłówka

### Hierarchy

* **Props**

### Index

#### Properties

* [title](#title)

### Properties

#### title

• `Optional` **title**: undefined \| string

*Defined in [src/components/GenericListHeader.tsx:13](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/GenericListHeader.tsx#L13)*


<a name="interfaces_components_guardedroute_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/GuardedRoute"](#modules_components_guardedroute_md) / Props

## Interface: Props

Właściwości komponentu strzeżonej trasy

### Hierarchy

* **Props**

### Index

#### Properties

* [roles](#roles)

### Properties

#### roles

•  **roles**: [Role](#role)[]

*Defined in [src/components/GuardedRoute.tsx:9](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/GuardedRoute.tsx#L9)*

Tablica z dozwolonymi rolami


<a name="interfaces_components_kidlistitem_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/KidListItem"](#modules_components_kidlistitem_md) / Props

## Interface: Props

Właściwości komponentu elementu listy dzieci

### Hierarchy

* **Props**

### Index

#### Properties

* [data](#data)
* [handleDelete](#handledelete)

### Properties

#### data

•  **data**: [Kid](#interfaces_api_kid_kidmd)

*Defined in [src/components/KidListItem.tsx:13](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/KidListItem.tsx#L13)*

Obiekt dziecka

___

#### handleDelete

•  **handleDelete**: () => Promise\<void>

*Defined in [src/components/KidListItem.tsx:15](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/KidListItem.tsx#L15)*

Funkcja uruchamiana przy usuwaniu


<a name="interfaces_components_meallistitem_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/MealListItem"](#modules_components_meallistitem_md) / Props

## Interface: Props

Właściwości komponentu elementu listy posiłków

### Hierarchy

* **Props**

### Index

#### Properties

* [data](#data)
* [onRemove](#onremove)

### Properties

#### data

•  **data**: [OrderMeal](#ordermeal)

*Defined in [src/components/MealListItem.tsx:15](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/MealListItem.tsx#L15)*

Obiekt posiłku

___

#### onRemove

• `Optional` **onRemove**: undefined \| (mealId: string) => void

*Defined in [src/components/MealListItem.tsx:17](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/MealListItem.tsx#L17)*

Funkcja uruchamiana przy usuwaniu


<a name="interfaces_components_orderlistitem_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/OrderListItem"](#modules_components_orderlistitem_md) / Props

## Interface: Props

Właściwości komponentu elementu listy zamówień

### Hierarchy

* **Props**

### Index

#### Properties

* [data](#data)
* [onClick](#onclick)

### Properties

#### data

•  **data**: [Order](#interfaces_api_orders_ordermd)

*Defined in [src/components/OrderListItem.tsx:12](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/OrderListItem.tsx#L12)*

Obiekt zamówienia

___

#### onClick

• `Optional` **onClick**: undefined \| () => void

*Defined in [src/components/OrderListItem.tsx:14](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/OrderListItem.tsx#L14)*

Funkcja uruchamiana po kliknięciu


<a name="interfaces_components_pagewrapper_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/PageWrapper"](#modules_components_pagewrapper_md) / Props

## Interface: Props

Właściwości komponentu wrappera podstrony

### Hierarchy

* **Props**

### Index

#### Properties

* [title](#title)
* [toolbar](#toolbar)

### Properties

#### title

• `Optional` **title**: undefined \| string

*Defined in [src/components/PageWrapper.tsx:31](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/PageWrapper.tsx#L31)*

Tytuł

___

#### toolbar

• `Optional` **toolbar**: React.ReactNode

*Defined in [src/components/PageWrapper.tsx:29](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/PageWrapper.tsx#L29)*

Komponent paska narzędzi


<a name="interfaces_components_parentdrawer_propsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["components/ParentDrawer"](#modules_components_parentdrawer_md) / Props

## Interface: Props

Właściwości komponentu nagłówka panelu bocznego rodzica

### Hierarchy

* **Props**

### Index

#### Properties

* [user](#user)

### Properties

#### user

•  **user**: [ParentUser](#interfaces_api_auth_parentusermd)

*Defined in [src/components/ParentDrawer.tsx:13](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/ParentDrawer.tsx#L13)*

Obiekt użytkownika


<a name="interfaces_utils_authstate_authstatemd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["utils/authState"](#modules_utils_authstate_md) / AuthState

## Interface: AuthState

Stan uwierzytelnienia

### Hierarchy

* **AuthState**

### Index

#### Properties

* [user](#user)

### Properties

#### user

• `Optional` **user**: [User](#user)

*Defined in [src/utils/authState.ts:7](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/authState.ts#L7)*

Obiekt użytkownika


<a name="interfaces_utils_types_formpropsmd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["utils/types"](#modules_utils_types_md) / FormProps

## Interface: FormProps\<T>

Typ formularza z właściwościami

### Type parameters

Name |
------ |
`T` |

### Hierarchy

* **FormProps**

### Index

#### Properties

* [error](#error)
* [form](#form)
* [onSubmit](#onsubmit)

### Properties

#### error

• `Optional` **error**: undefined \| string

*Defined in [src/utils/types.ts:13](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/types.ts#L13)*

Błąd formularza

___

#### form

•  **form**: UseFormMethods\<T>

*Defined in [src/utils/types.ts:15](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/types.ts#L15)*

Obiekt formularza

___

#### onSubmit

•  **onSubmit**: (data: T) => void

*Defined in [src/utils/types.ts:11](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/types.ts#L11)*

Funkcja uruchamiana po zatwierdzeniu


<a name="interfaces_utils_types_stylablemd"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / ["utils/types"](#modules_utils_types_md) / Stylable

## Interface: Stylable

Typ komponentu pozwalającego na zmiane styli

### Hierarchy

* **Stylable**

### Index

#### Properties

* [className](#classname)

### Properties

#### className

• `Optional` **className**: undefined \| string

*Defined in [src/utils/types.ts:5](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/types.ts#L5)*

# Modules


<a name="modules_api_agencies_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "api/agencies"

## Module: "api/agencies"

### Index

#### Interfaces

* [Agency](#interfaces_api_agencies_agencymd)
* [FetchParams](#interfaces_api_agencies_fetchparamsmd)

#### Functions

* [useAgencies](#useagencies)
* [useAgency](#useagency)
* [useDeleteAgency](#usedeleteagency)

### Functions

#### useAgencies

▸ `Const`**useAgencies**(`param?`: [FetchParams](#interfaces_api_agencies_fetchparamsmd)): PaginatedQueryResult\<{ next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T[]  }, unknown>

*Defined in [src/api/agencies.ts:31](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/agencies.ts#L31)*

Hook do pobierania listy placówek

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`param?` | [FetchParams](#interfaces_api_agencies_fetchparamsmd) | Parametry pagiancji  |

**Returns:** PaginatedQueryResult\<{ next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T[]  }, unknown>

___

#### useAgency

▸ `Const`**useAgency**(`code`: string): QueryResult\<[AgencyUser](#interfaces_api_auth_agencyusermd), unknown>

*Defined in [src/api/agencies.ts:41](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/agencies.ts#L41)*

Hook do pobierania informacji o placówce

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`code` | string | Kod placówki  |

**Returns:** QueryResult\<[AgencyUser](#interfaces_api_auth_agencyusermd), unknown>

___

#### useDeleteAgency

▸ `Const`**useDeleteAgency**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, string, unknown>

*Defined in [src/api/agencies.ts:51](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/agencies.ts#L51)*

Hook do usuwania placówki

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, string, unknown>


<a name="modules_api_auth_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "api/auth"

## Module: "api/auth"

### Index

#### Interfaces

* [AdminUser](#interfaces_api_auth_adminusermd)
* [AgencyUser](#interfaces_api_auth_agencyusermd)
* [LoginParams](#interfaces_api_auth_loginparamsmd)
* [NewAgency](#interfaces_api_auth_newagencymd)
* [NewKid](#interfaces_api_auth_newkidmd)
* [ParentUser](#interfaces_api_auth_parentusermd)
* [RegisterParams](#interfaces_api_auth_registerparamsmd)

#### Type aliases

* [OrdersPeriod](#ordersperiod)
* [Role](#role)
* [User](#user)

#### Variables

* [ORDERS\_PERIODS](#orders_periods)

#### Functions

* [useAddAgency](#useaddagency)
* [useAddKid](#useaddkid)
* [useLogin](#uselogin)
* [useMe](#useme)
* [useRegister](#useregister)

### Type aliases

#### OrdersPeriod

Ƭ  **OrdersPeriod**: \"day\" \| \"week\" \| \"month\" \| \"semestr\"

*Defined in [src/api/auth.ts:59](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L59)*

___

#### Role

Ƭ  **Role**: \"agency\" \| \"parent\" \| \"admin\"

*Defined in [src/api/auth.ts:5](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L5)*

___

#### User

Ƭ  **User**: [AgencyUser](#interfaces_api_auth_agencyusermd) \| [ParentUser](#interfaces_api_auth_parentusermd) \| [AdminUser](#interfaces_api_auth_adminusermd)

*Defined in [src/api/auth.ts:79](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L79)*

### Variables

#### ORDERS\_PERIODS

• `Const` **ORDERS\_PERIODS**: [\"day\", \"week\", \"month\", \"semestr\"] = ['day', 'week', 'month', 'semestr'] as const

*Defined in [src/api/auth.ts:60](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L60)*

### Functions

#### useAddAgency

▸ `Const`**useAddAgency**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[AgencyUser](#interfaces_api_auth_agencyusermd)>, unknown, [NewAgency](#interfaces_api_auth_newagencymd), unknown>

*Defined in [src/api/auth.ts:124](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L124)*

Hook do rejestracji placówki

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[AgencyUser](#interfaces_api_auth_agencyusermd)>, unknown, [NewAgency](#interfaces_api_auth_newagencymd), unknown>

___

#### useAddKid

▸ `Const`**useAddKid**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[AgencyUser](#interfaces_api_auth_agencyusermd)>, unknown, [NewKid](#interfaces_api_auth_newkidmd), unknown>

*Defined in [src/api/auth.ts:132](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L132)*

Hook do rejestracji dziecka

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[AgencyUser](#interfaces_api_auth_agencyusermd)>, unknown, [NewKid](#interfaces_api_auth_newkidmd), unknown>

___

#### useLogin

▸ `Const`**useLogin**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[User](#user)>, unknown, [LoginParams](#interfaces_api_auth_loginparamsmd), unknown>

*Defined in [src/api/auth.ts:108](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L108)*

Hook do logowania użytkownika

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[User](#user)>, unknown, [LoginParams](#interfaces_api_auth_loginparamsmd), unknown>

___

#### useMe

▸ `Const`**useMe**(): QueryResult\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[User](#user)>, unknown>

*Defined in [src/api/auth.ts:139](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L139)*

Hook do pobrania danych użytkownika

**Returns:** QueryResult\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[User](#user)>, unknown>

___

#### useRegister

▸ `Const`**useRegister**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[User](#user)>, unknown, [RegisterParams](#interfaces_api_auth_registerparamsmd), unknown>

*Defined in [src/api/auth.ts:116](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/auth.ts#L116)*

Hook do rejestracji użytkownika

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[User](#user)>, unknown, [RegisterParams](#interfaces_api_auth_registerparamsmd), unknown>


<a name="modules_api_index_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "api/index"

## Module: "api/index"

### Index

#### Interfaces

* [AltPaginatedApiResponse](#interfaces_api_index_altpaginatedapiresponsemd)
* [ApiError](#interfaces_api_index_apierrormd)
* [ApiResponse](#interfaces_api_index_apiresponsemd)
* [PaginatedApiResponse](#interfaces_api_index_paginatedapiresponsemd)

#### Variables

* [api](#api)

### Variables

#### api

• `Const` **api**: AxiosInstance = axios.create({ baseURL: '/api/v1/', headers: { 'Content-Type': 'application/json', }, withCredentials: true,})

*Defined in [src/api/index.ts:72](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/index.ts#L72)*

Klient API


<a name="modules_api_kid_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "api/kid"

## Module: "api/kid"

### Index

#### Interfaces

* [Kid](#interfaces_api_kid_kidmd)

#### Functions

* [useAddKid](#useaddkid)
* [useDeleteKid](#usedeletekid)
* [useKids](#usekids)

### Functions

#### useAddKid

▸ `Const`**useAddKid**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, [Kid](#interfaces_api_kid_kidmd), unknown>

*Defined in [src/api/kid.ts:34](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/kid.ts#L34)*

Hook do dodawania dziecka

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, [Kid](#interfaces_api_kid_kidmd), unknown>

___

#### useDeleteKid

▸ `Const`**useDeleteKid**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, string, unknown>

*Defined in [src/api/kid.ts:43](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/kid.ts#L43)*

Hook do usuwania dziecka

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, string, unknown>

___

#### useKids

▸ `Const`**useKids**(`param?`: [FetchParams](#interfaces_api_agencies_fetchparamsmd)): PaginatedQueryResult\<{ next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T[]  }, unknown>

*Defined in [src/api/kid.ts:24](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/kid.ts#L24)*

Hook do pobierania listy dzieci

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`param?` | [FetchParams](#interfaces_api_agencies_fetchparamsmd) | Parametry pagiancji  |

**Returns:** PaginatedQueryResult\<{ next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T[]  }, unknown>


<a name="modules_api_meal_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "api/meal"

## Module: "api/meal"

### Index

#### Interfaces

* [Meal](#interfaces_api_meal_mealmd)

#### Type aliases

* [MealType](#mealtype)
* [NewMeal](#newmeal)

#### Variables

* [MEAL\_TYPES](#meal_types)

#### Functions

* [useAddMeal](#useaddmeal)
* [useDeleteMeal](#usedeletemeal)
* [useMeals](#usemeals)

### Type aliases

#### MealType

Ƭ  **MealType**: \"breakfast\" \| \"lunch\" \| \"soup\" \| \"main dish\" \| \"dinner\" \| \"tea time\"

*Defined in [src/api/meal.ts:9](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/meal.ts#L9)*

___

#### NewMeal

Ƭ  **NewMeal**: Omit\<[Meal](#interfaces_api_meal_mealmd), \"\_id\">

*Defined in [src/api/meal.ts:24](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/meal.ts#L24)*

### Variables

#### MEAL\_TYPES

• `Const` **MEAL\_TYPES**: [\"breakfast\", \"lunch\", \"soup\", \"main dish\", \"dinner\", \"tea time\"] = ['breakfast', 'lunch', 'soup', 'main dish', 'dinner', 'tea time'] as const

*Defined in [src/api/meal.ts:10](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/meal.ts#L10)*

### Functions

#### useAddMeal

▸ `Const`**useAddMeal**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, Pick\<[Meal](#interfaces_api_meal_mealmd), \"type\" \| \"description\" \| \"date\" \| \"price\">, unknown>

*Defined in [src/api/meal.ts:40](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/meal.ts#L40)*

Hook do dodawania posiłku

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, Pick\<[Meal](#interfaces_api_meal_mealmd), \"type\" \| \"description\" \| \"date\" \| \"price\">, unknown>

___

#### useDeleteMeal

▸ `Const`**useDeleteMeal**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, string, unknown>

*Defined in [src/api/meal.ts:49](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/meal.ts#L49)*

Hook do usunięcia posiłku

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, string, unknown>

___

#### useMeals

▸ `Const`**useMeals**(`param`: [FetchParams](#interfaces_api_agencies_fetchparamsmd) & MealsParams): PaginatedQueryResult\<{ next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T[]  }, unknown>

*Defined in [src/api/meal.ts:30](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/meal.ts#L30)*

Hook do pobierania listy posiłków

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`param` | [FetchParams](#interfaces_api_agencies_fetchparamsmd) & MealsParams | Parametry pagiancji  |

**Returns:** PaginatedQueryResult\<{ next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T[]  }, unknown>


<a name="modules_api_orders_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "api/orders"

## Module: "api/orders"

### Index

#### Interfaces

* [Order](#interfaces_api_orders_ordermd)
* [OrderParams](#interfaces_api_orders_orderparamsmd)
* [OrderSummary](#interfaces_api_orders_ordersummarymd)
* [RemoveMealParams](#interfaces_api_orders_removemealparamsmd)

#### Type aliases

* [DayMeals](#daymeals)
* [KidOrdersFetchParams](#kidordersfetchparams)
* [Meals](#meals)
* [OrderDay](#orderday)
* [OrderFetchParams](#orderfetchparams)
* [OrderMeal](#ordermeal)
* [OrderWithMeals](#orderwithmeals)
* [OrdersFetchParams](#ordersfetchparams)
* [OrdersStats](#ordersstats)

#### Functions

* [useAllKids](#useallkids)
* [useEarliestOrderDate](#useearliestorderdate)
* [useGetAgencyOrders](#usegetagencyorders)
* [useGetOrderPrice](#usegetorderprice)
* [useKidOrders](#usekidorders)
* [useOrder](#useorder)
* [useOrdersStats](#useordersstats)
* [usePayOrder](#usepayorder)
* [usePlaceOrder](#useplaceorder)
* [useRemoveMeal](#useremovemeal)

### Type aliases

#### DayMeals

Ƭ  **DayMeals**: Record\<[MealType](#mealtype), boolean>

*Defined in [src/api/orders.ts:14](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L14)*

___

#### KidOrdersFetchParams

Ƭ  **KidOrdersFetchParams**: { kidCode?: undefined \| string  } & [FetchParams](#interfaces_api_agencies_fetchparamsmd)

*Defined in [src/api/orders.ts:68](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L68)*

___

#### Meals

Ƭ  **Meals**: Record\<[OrderDay](#orderday), [DayMeals](#daymeals)>

*Defined in [src/api/orders.ts:15](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L15)*

___

#### OrderDay

Ƭ  **OrderDay**: 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6

*Defined in [src/api/orders.ts:13](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L13)*

___

#### OrderFetchParams

Ƭ  **OrderFetchParams**: { id: string  } & [FetchParams](#interfaces_api_agencies_fetchparamsmd)

*Defined in [src/api/orders.ts:63](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L63)*

___

#### OrderMeal

Ƭ  **OrderMeal**: Omit\<[Meal](#interfaces_api_meal_mealmd), \"description\">

*Defined in [src/api/orders.ts:94](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L94)*

___

#### OrderWithMeals

Ƭ  **OrderWithMeals**: { kid: Omit\<[Kid](#interfaces_api_kid_kidmd), \"\_id\"> ; meals: Omit\<[Meal](#interfaces_api_meal_mealmd), \"description\">[]  } & [Order](#interfaces_api_orders_ordermd)

*Defined in [src/api/orders.ts:51](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L51)*

___

#### OrdersFetchParams

Ƭ  **OrdersFetchParams**: { agencyCode?: undefined \| string  } & [FetchParams](#interfaces_api_agencies_fetchparamsmd)

*Defined in [src/api/orders.ts:58](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L58)*

___

#### OrdersStats

Ƭ  **OrdersStats**: { agency: Agency[\"name\"]  } & Record\<Meal[\"type\"], number>

*Defined in [src/api/orders.ts:82](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L82)*

### Functions

#### useAllKids

▸ `Const`**useAllKids**(): QueryResult\<[Kid](#interfaces_api_kid_kidmd)[], unknown>

*Defined in [src/api/orders.ts:187](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L187)*

Hook do pobierania listy dzieci

**Returns:** QueryResult\<[Kid](#interfaces_api_kid_kidmd)[], unknown>

___

#### useEarliestOrderDate

▸ `Const`**useEarliestOrderDate**(`kidCode?`: undefined \| string): QueryResult\<string, unknown>

*Defined in [src/api/orders.ts:101](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L101)*

Hook do pobierania najwcześniejszą datę na ktorą może być utworzone zamówienie

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`kidCode?` | undefined \| string | Kod dziecka  |

**Returns:** QueryResult\<string, unknown>

___

#### useGetAgencyOrders

▸ `Const`**useGetAgencyOrders**(`param`: [OrdersFetchParams](#ordersfetchparams)): PaginatedQueryResult\<{ next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T[]  }, unknown>

*Defined in [src/api/orders.ts:121](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L121)*

Hook do pobierania listy zamówień danej placówki

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`param` | [OrdersFetchParams](#ordersfetchparams) | Parametry pagiancji  |

**Returns:** PaginatedQueryResult\<{ next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T[]  }, unknown>

___

#### useGetOrderPrice

▸ `Const`**useGetOrderPrice**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[OrderSummary](#interfaces_api_orders_ordersummarymd)>, unknown, [OrderParams](#interfaces_api_orders_orderparamsmd) & { kidCode: string  }, unknown>

*Defined in [src/api/orders.ts:111](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L111)*

Hook do pobierania ceny zamówienia

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[OrderSummary](#interfaces_api_orders_ordersummarymd)>, unknown, [OrderParams](#interfaces_api_orders_orderparamsmd) & { kidCode: string  }, unknown>

___

#### useKidOrders

▸ `Const`**useKidOrders**(`param`: [KidOrdersFetchParams](#kidordersfetchparams)): PaginatedQueryResult\<{ next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T[]  }, unknown>

*Defined in [src/api/orders.ts:160](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L160)*

Hook do pobierania zamówienia danego dziecka

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`param` | [KidOrdersFetchParams](#kidordersfetchparams) | Parametry pagiancji  |

**Returns:** PaginatedQueryResult\<{ next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T[]  }, unknown>

___

#### useOrder

▸ `Const`**useOrder**(`param`: [OrderFetchParams](#orderfetchparams)): PaginatedQueryResult\<{ next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T  }, unknown>

*Defined in [src/api/orders.ts:150](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L150)*

Hook do pobierania zamówienia

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`param` | [OrderFetchParams](#orderfetchparams) | Parametry pagiancji  |

**Returns:** PaginatedQueryResult\<{ next?: undefined \| { limit: number ; page: number  } ; numberOfPages: number ; prev?: undefined \| { limit: number ; page: number  } ; results: T  }, unknown>

___

#### useOrdersStats

▸ `Const`**useOrdersStats**(`statsDate`: Date): QueryResult\<[OrdersStats](#ordersstats)[], unknown>

*Defined in [src/api/orders.ts:197](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L197)*

Hook do pobierania statystyk zamówień

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`statsDate` | Date | Data  |

**Returns:** QueryResult\<[OrdersStats](#ordersstats)[], unknown>

___

#### usePayOrder

▸ `Const`**usePayOrder**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, string, unknown>

*Defined in [src/api/orders.ts:141](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L141)*

Hook do opłacenia zamówienia

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, string, unknown>

___

#### usePlaceOrder

▸ `Const`**usePlaceOrder**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<number>, unknown, [OrderParams](#interfaces_api_orders_orderparamsmd) & { kidCode: string  }, unknown>

*Defined in [src/api/orders.ts:131](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L131)*

Hook do tworzenia zamówienia

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<number>, unknown, [OrderParams](#interfaces_api_orders_orderparamsmd) & { kidCode: string  }, unknown>

___

#### useRemoveMeal

▸ `Const`**useRemoveMeal**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, [RemoveMealParams](#interfaces_api_orders_removemealparamsmd), unknown>

*Defined in [src/api/orders.ts:172](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/orders.ts#L172)*

Hook do usuwania dania z zamówienia

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, [RemoveMealParams](#interfaces_api_orders_removemealparamsmd), unknown>


<a name="modules_api_parent_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "api/parent"

## Module: "api/parent"

### Index

#### Interfaces

* [Parent](#interfaces_api_parent_parentmd)

#### Functions

* [useAddKid](#useaddkid)
* [useGetMyKid](#usegetmykid)

### Functions

#### useAddKid

▸ `Const`**useAddKid**(): MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, [Parent](#interfaces_api_parent_parentmd), unknown>

*Defined in [src/api/parent.ts:16](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/parent.ts#L16)*

Hook do dodawania dziecka

**Returns:** MutationResultPair\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<undefined>, unknown, [Parent](#interfaces_api_parent_parentmd), unknown>

___

#### useGetMyKid

▸ `Const`**useGetMyKid**(): QueryResult\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[Kid](#interfaces_api_kid_kidmd)[]>, unknown>

*Defined in [src/api/parent.ts:24](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/api/parent.ts#L24)*

Hook do pobierania listy dzieci danego rodzica

**Returns:** QueryResult\<[ApiResponse](#interfaces_api_index_apiresponsemd)\<[Kid](#interfaces_api_kid_kidmd)[]>, unknown>


<a name="modules_components_admindrawer_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/AdminDrawer"

## Module: "components/AdminDrawer"

### Index

#### Interfaces

* [Props](#interfaces_components_admindrawer_propsmd)

#### Functions

* [AdminDrawer](#admindrawer)

### Functions

#### AdminDrawer

▸ `Const`**AdminDrawer**(`props`: PropsWithChildren\<[Props](#interfaces_components_admindrawer_propsmd)>): Element

*Defined in [src/components/AdminDrawer.tsx:20](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/AdminDrawer.tsx#L20)*

Panel boczny administratora

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_admindrawer_propsmd)> | Właściwości panelu |

**Returns:** Element


<a name="modules_components_agencydrawer_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/AgencyDrawer"

## Module: "components/AgencyDrawer"

### Index

#### Interfaces

* [Props](#interfaces_components_agencydrawer_propsmd)

#### Functions

* [AgencyDrawer](#agencydrawer)

### Functions

#### AgencyDrawer

▸ `Const`**AgencyDrawer**(`props`: PropsWithChildren\<[Props](#interfaces_components_agencydrawer_propsmd)>): Element

*Defined in [src/components/AgencyDrawer.tsx:20](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/AgencyDrawer.tsx#L20)*

Panel boczny opiekuna placówki

**`component`** 

##### Parameters:

Name | Type |
------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_agencydrawer_propsmd)> |

**Returns:** Element


<a name="modules_components_agencylistitem_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/AgencyListItem"

## Module: "components/AgencyListItem"

### Index

#### Interfaces

* [Props](#interfaces_components_agencylistitem_propsmd)

#### Functions

* [AgencyListItem](#agencylistitem)

### Functions

#### AgencyListItem

▸ `Const`**AgencyListItem**(`props`: PropsWithChildren\<[Props](#interfaces_components_agencylistitem_propsmd)>): Element

*Defined in [src/components/AgencyListItem.tsx:21](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/AgencyListItem.tsx#L21)*

Element listy placówek

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_agencylistitem_propsmd)> | Właściwości elementu |

**Returns:** Element


<a name="modules_components_app_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/App"

## Module: "components/App"

### Index

#### Functions

* [App](#app)

### Functions

#### App

▸ `Const`**App**(): Element

*Defined in [src/components/App.tsx:67](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/App.tsx#L67)*

Główny komponent aplikacji

**`component`** 

**Returns:** Element


<a name="modules_components_confirmdialog_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/ConfirmDialog"

## Module: "components/ConfirmDialog"

### Index

#### Interfaces

* [Props](#interfaces_components_confirmdialog_propsmd)

#### Functions

* [ConfirmDialog](#confirmdialog)

### Functions

#### ConfirmDialog

▸ `Const`**ConfirmDialog**(`props`: PropsWithChildren\<[Props](#interfaces_components_confirmdialog_propsmd)>): Element

*Defined in [src/components/ConfirmDialog.tsx:31](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/ConfirmDialog.tsx#L31)*

Komponent okna dialogowego potwierdzania operacji

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_confirmdialog_propsmd)> | Właściwości komponentu |

**Returns:** Element


<a name="modules_components_drawerheader_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/DrawerHeader"

## Module: "components/DrawerHeader"

### Index

#### Interfaces

* [Props](#interfaces_components_drawerheader_propsmd)

#### Functions

* [DrawerHeader](#drawerheader)

### Functions

#### DrawerHeader

▸ `Const`**DrawerHeader**(`props`: PropsWithChildren\<[Props](#interfaces_components_drawerheader_propsmd)>): ReactElement

*Defined in [src/components/DrawerHeader.tsx:30](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/DrawerHeader.tsx#L30)*

Komponent nagłówka panelu bocznego

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_drawerheader_propsmd)> | Właściwości nagłówka |

**Returns:** ReactElement


<a name="modules_components_draweritem_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/DrawerItem"

## Module: "components/DrawerItem"

### Index

#### Interfaces

* [Props](#interfaces_components_draweritem_propsmd)

#### Functions

* [DrawerItem](#draweritem)

### Functions

#### DrawerItem

▸ `Const`**DrawerItem**(`props`: PropsWithChildren\<[Props](#interfaces_components_draweritem_propsmd)>): ReactElement

*Defined in [src/components/DrawerItem.tsx:30](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/DrawerItem.tsx#L30)*

Komponent elementu nawigacyjnego

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_draweritem_propsmd)> | Właściwości komponentu |

**Returns:** ReactElement


<a name="modules_components_forms_addagencyform_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/forms/AddAgencyForm"

## Module: "components/forms/AddAgencyForm"

### Index

#### Variables

* [schema](#schema)

#### Functions

* [AddAgencyForm](#addagencyform)

### Variables

#### schema

• `Const` **schema**: ZodObject\<{ email: ZodString = z.string()
    .min(1, { message: 'Email jest wymagany' })
    .email({ message: 'To nie jest poprawny email' }); name: ZodString = z.string()
    .min(1, { message: 'Nazwa placówki jest wymagana' })
    .max(100, { message: 'Nazwa placówki musi być krótsza niż 100 znaków' }); ordersPeriod: ZodEnum\<[\"day\", \"week\", \"month\", \"semestr\"]> = z.enum([...ORDERS\_PERIODS]); summerTermEnd: ZodDate = z.date(); winterTermEnd: ZodDate = z.date() }, \"passthrough\", ZodTypeAny, {}, {}> = z.object({ email: z.string() .min(1, { message: 'Email jest wymagany' }) .email({ message: 'To nie jest poprawny email' }), name: z.string() .min(1, { message: 'Nazwa placówki jest wymagana' }) .max(100, { message: 'Nazwa placówki musi być krótsza niż 100 znaków' }), summerTermEnd: z.date(), winterTermEnd: z.date(), ordersPeriod: z.enum([...ORDERS\_PERIODS]),}) .refine(data => isAfter(data.summerTermEnd, data.winterTermEnd), { message: 'Data semestru letniego musi być późniejsza niż data semestru zimowego', path: ['summerTermEnd'], })

*Defined in [src/components/forms/AddAgencyForm.tsx:37](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/forms/AddAgencyForm.tsx#L37)*

Schemat walidacji danych formularza dodawania placówki

### Functions

#### AddAgencyForm

▸ `Const`**AddAgencyForm**(`props`: PropsWithChildren\<[FormProps](#interfaces_utils_types_formpropsmd)\<[NewAgency](#interfaces_api_auth_newagencymd)> & [Stylable](#interfaces_utils_types_stylablemd)>): Element

*Defined in [src/components/forms/AddAgencyForm.tsx:58](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/forms/AddAgencyForm.tsx#L58)*

Formularz dodawania placówki

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[FormProps](#interfaces_utils_types_formpropsmd)\<[NewAgency](#interfaces_api_auth_newagencymd)> & [Stylable](#interfaces_utils_types_stylablemd)> | Właściwości formularza |

**Returns:** Element


<a name="modules_components_forms_addkidform_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/forms/AddKidForm"

## Module: "components/forms/AddKidForm"

### Index

#### Variables

* [schema](#schema)

#### Functions

* [AddKidForm](#addkidform)

### Variables

#### schema

• `Const` **schema**: ZodObject\<{ agencyCode: ZodString = z.string()
    .min(4, { message: 'Kod jest wymagany' }); firstName: ZodString = z.string()
    .min(3, { message: 'Imię jest wymagane' }); lastName: ZodString = z.string()
    .min(3, { message: 'Nazwisko jest wymagane' }) }, \"passthrough\", ZodTypeAny, {}, {}> = z.object({ firstName: z.string() .min(3, { message: 'Imię jest wymagane' }), lastName: z.string() .min(3, { message: 'Nazwisko jest wymagane' }), agencyCode: z.string() .min(4, { message: 'Kod jest wymagany' }),})

*Defined in [src/components/forms/AddKidForm.tsx:33](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/forms/AddKidForm.tsx#L33)*

Schemat walidacji formularza dodawania podopiecznego

### Functions

#### AddKidForm

▸ `Const`**AddKidForm**(`props`: PropsWithChildren\<[FormProps](#interfaces_utils_types_formpropsmd)\<[NewKid](#interfaces_api_auth_newkidmd)> & [Stylable](#interfaces_utils_types_stylablemd)>): Element

*Defined in [src/components/forms/AddKidForm.tsx:47](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/forms/AddKidForm.tsx#L47)*

Formularz dodawania podopiecznego

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[FormProps](#interfaces_utils_types_formpropsmd)\<[NewKid](#interfaces_api_auth_newkidmd)> & [Stylable](#interfaces_utils_types_stylablemd)> | Właściwości formularza |

**Returns:** Element


<a name="modules_components_forms_addparentkidform_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/forms/AddParentKidForm"

## Module: "components/forms/AddParentKidForm"

### Index

#### Variables

* [schema](#schema)

#### Functions

* [AddParentKidForm](#addparentkidform)

### Variables

#### schema

• `Const` **schema**: ZodObject\<{ kidCode: ZodString = z.string()
    .min(4, { message: 'Kod dziecka jest wymagany' }) }, \"passthrough\", ZodTypeAny, {}, {}> = z.object({ kidCode: z.string() .min(4, { message: 'Kod dziecka jest wymagany' }),})

*Defined in [src/components/forms/AddParentKidForm.tsx:33](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/forms/AddParentKidForm.tsx#L33)*

Schemat walidacji formularza przypisywania dziecka do rodzica

### Functions

#### AddParentKidForm

▸ `Const`**AddParentKidForm**(`props`: PropsWithChildren\<[FormProps](#interfaces_utils_types_formpropsmd)\<[Parent](#interfaces_api_parent_parentmd)> & [Stylable](#interfaces_utils_types_stylablemd)>): Element

*Defined in [src/components/forms/AddParentKidForm.tsx:43](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/forms/AddParentKidForm.tsx#L43)*

Formularz przypisywania dziecka do rodzica

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[FormProps](#interfaces_utils_types_formpropsmd)\<[Parent](#interfaces_api_parent_parentmd)> & [Stylable](#interfaces_utils_types_stylablemd)> | Właściwości formularza |

**Returns:** Element


<a name="modules_components_forms_loginform_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/forms/LoginForm"

## Module: "components/forms/LoginForm"

### Index

#### Variables

* [schema](#schema)

#### Functions

* [LoginForm](#loginform)

### Variables

#### schema

• `Const` **schema**: ZodObject\<{ email: ZodString = z.string()
    .min(1, { message: 'Email jest wymagany' })
    .email({ message: 'To nie jest poprawny email' }); password: ZodString = z.string()
    .min(1, { message: 'Hasło jest wymagane' }) }, \"passthrough\", ZodTypeAny, {}, {}> = z.object({ email: z.string() .min(1, { message: 'Email jest wymagany' }) .email({ message: 'To nie jest poprawny email' }), password: z.string() .min(1, { message: 'Hasło jest wymagane' }),})

*Defined in [src/components/forms/LoginForm.tsx:35](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/forms/LoginForm.tsx#L35)*

Schemat walidacji formularza logowania

### Functions

#### LoginForm

▸ `Const`**LoginForm**(`props`: PropsWithChildren\<[FormProps](#interfaces_utils_types_formpropsmd)\<[LoginParams](#interfaces_api_auth_loginparamsmd)> & [Stylable](#interfaces_utils_types_stylablemd)>): Element

*Defined in [src/components/forms/LoginForm.tsx:48](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/forms/LoginForm.tsx#L48)*

Formularz logowania

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[FormProps](#interfaces_utils_types_formpropsmd)\<[LoginParams](#interfaces_api_auth_loginparamsmd)> & [Stylable](#interfaces_utils_types_stylablemd)> | Właściwości formularza |

**Returns:** Element


<a name="modules_components_forms_mealform_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/forms/MealForm"

## Module: "components/forms/MealForm"

### Index

#### Variables

* [schema](#schema)

#### Functions

* [MealForm](#mealform)

### Variables

#### schema

• `Const` **schema**: ZodObject\<{ date: ZodDate = z.date(); description: ZodString = z.string()
    .min(1, { message: 'Opis dania jest wymagany' })
    .max(256, { message: 'Opis dania musi być krótszy niż 100 znaków' }); price: ZodNumber = z.number(); type: ZodEnum\<[\"breakfast\", \"lunch\", \"soup\", \"main dish\", \"dinner\", \"tea time\"]> = z.enum([...MEAL\_TYPES]) }, \"passthrough\", ZodTypeAny, {}, {}> = z.object({ description: z.string() .min(1, { message: 'Opis dania jest wymagany' }) .max(256, { message: 'Opis dania musi być krótszy niż 100 znaków' }), date: z.date(), price: z.number(), type: z.enum([...MEAL\_TYPES]),})

*Defined in [src/components/forms/MealForm.tsx:36](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/forms/MealForm.tsx#L36)*

Schemat walidacji formularza dodawania posiłku

### Functions

#### MealForm

▸ `Const`**MealForm**(`props`: PropsWithChildren\<[FormProps](#interfaces_utils_types_formpropsmd)\<Pick\<[Meal](#interfaces_api_meal_mealmd), \"type\" \| \"description\" \| \"date\" \| \"price\">> & [Stylable](#interfaces_utils_types_stylablemd)>): Element

*Defined in [src/components/forms/MealForm.tsx:50](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/forms/MealForm.tsx#L50)*

Formularz dodawania posiłku

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[FormProps](#interfaces_utils_types_formpropsmd)\<Pick\<[Meal](#interfaces_api_meal_mealmd), \"type\" \| \"description\" \| \"date\" \| \"price\">> & [Stylable](#interfaces_utils_types_stylablemd)> | Właściwości formularza |

**Returns:** Element


<a name="modules_components_forms_registryform_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/forms/RegistryForm"

## Module: "components/forms/RegistryForm"

### Index

#### Variables

* [schema](#schema)

#### Functions

* [RegistryForm](#registryform)

### Variables

#### schema

• `Const` **schema**: ZodObject\<{ agencyCode: ZodString = z.string()
    .min(4, { message: 'Kod jest wymagany' }); email: ZodString = z.string()
    .min(1, { message: 'Email jest wymagany' })
    .email({ message: 'To nie jest poprawny email' }); firstName: ZodString = z.string()
    .min(3, { message: 'Imię jest wymagane' }); lastName: ZodString = z.string()
    .min(3, { message: 'Nazwisko jest wymagane' }); password: ZodString = z.string()
    .min(4, { message: 'Hasło jest wymagane' }); passwordConfirm: ZodString = z.string()
    .min(4, { message: 'Hasło jest wymagane' }) }, \"passthrough\", ZodTypeAny, {}, {}> = z.object({ email: z.string() .min(1, { message: 'Email jest wymagany' }) .email({ message: 'To nie jest poprawny email' }), firstName: z.string() .min(3, { message: 'Imię jest wymagane' }), lastName: z.string() .min(3, { message: 'Nazwisko jest wymagane' }), password: z.string() .min(4, { message: 'Hasło jest wymagane' }), passwordConfirm: z.string() .min(4, { message: 'Hasło jest wymagane' }), agencyCode: z.string() .min(4, { message: 'Kod jest wymagany' }),}) .refine(data => data.password === data.passwordConfirm, { message: 'Hasła się nie zgadzają', path: ['passwordConfirm'], })

*Defined in [src/components/forms/RegistryForm.tsx:35](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/forms/RegistryForm.tsx#L35)*

Schemat walidacji formularza rejestracji

### Functions

#### RegistryForm

▸ `Const`**RegistryForm**(`props`: PropsWithChildren\<[FormProps](#interfaces_utils_types_formpropsmd)\<[RegisterParams](#interfaces_api_auth_registerparamsmd)> & [Stylable](#interfaces_utils_types_stylablemd)>): Element

*Defined in [src/components/forms/RegistryForm.tsx:60](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/forms/RegistryForm.tsx#L60)*

Formularz rejestracji

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[FormProps](#interfaces_utils_types_formpropsmd)\<[RegisterParams](#interfaces_api_auth_registerparamsmd)> & [Stylable](#interfaces_utils_types_stylablemd)> | Właściwości formularza |

**Returns:** Element


<a name="modules_components_genericlist_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/GenericList"

## Module: "components/GenericList"

### Index

#### Interfaces

* [Props](#interfaces_components_genericlist_propsmd)

#### Functions

* [GenericList](#genericlist)

### Functions

#### GenericList

▸ `Const`**GenericList**(`props`: PropsWithChildren\<[Props](#interfaces_components_genericlist_propsmd) & [Stylable](#interfaces_utils_types_stylablemd)>): Element

*Defined in [src/components/GenericList.tsx:63](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/GenericList.tsx#L63)*

Komponent szablonu listy

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_genericlist_propsmd) & [Stylable](#interfaces_utils_types_stylablemd)> | Właściwości komponentu |

**Returns:** Element


<a name="modules_components_genericlistheader_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/GenericListHeader"

## Module: "components/GenericListHeader"

### Index

#### Interfaces

* [Props](#interfaces_components_genericlistheader_propsmd)

#### Functions

* [GenericListHeader](#genericlistheader)

### Functions

#### GenericListHeader

▸ `Const`**GenericListHeader**(`props`: PropsWithChildren\<[Props](#interfaces_components_genericlistheader_propsmd) & [Stylable](#interfaces_utils_types_stylablemd)>): Element

*Defined in [src/components/GenericListHeader.tsx:21](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/GenericListHeader.tsx#L21)*

Komponent szablonu nagłówka listy

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_genericlistheader_propsmd) & [Stylable](#interfaces_utils_types_stylablemd)> | Właściwości komponentu |

**Returns:** Element


<a name="modules_components_guardedroute_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/GuardedRoute"

## Module: "components/GuardedRoute"

### Index

#### Interfaces

* [Props](#interfaces_components_guardedroute_propsmd)

#### Functions

* [GuardedRoute](#guardedroute)

### Functions

#### GuardedRoute

▸ `Const`**GuardedRoute**(`props`: PropsWithChildren\<[Props](#interfaces_components_guardedroute_propsmd) & RouteProps>): Element

*Defined in [src/components/GuardedRoute.tsx:17](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/GuardedRoute.tsx#L17)*

Komponent strzeżonej trasy

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_guardedroute_propsmd) & RouteProps> | Właściwości komponentu |

**Returns:** Element


<a name="modules_components_kidlistitem_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/KidListItem"

## Module: "components/KidListItem"

### Index

#### Interfaces

* [Props](#interfaces_components_kidlistitem_propsmd)

#### Functions

* [KidListItem](#kidlistitem)

### Functions

#### KidListItem

▸ `Const`**KidListItem**(`props`: PropsWithChildren\<[Props](#interfaces_components_kidlistitem_propsmd)>): Element

*Defined in [src/components/KidListItem.tsx:23](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/KidListItem.tsx#L23)*

Komponent elementu listy dzieci

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_kidlistitem_propsmd)> | Właściwości komponentu |

**Returns:** Element


<a name="modules_components_meallistitem_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/MealListItem"

## Module: "components/MealListItem"

### Index

#### Interfaces

* [Props](#interfaces_components_meallistitem_propsmd)

#### Functions

* [MealListItem](#meallistitem)

### Functions

#### MealListItem

▸ `Const`**MealListItem**(`props`: PropsWithChildren\<[Props](#interfaces_components_meallistitem_propsmd)>): Element

*Defined in [src/components/MealListItem.tsx:25](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/MealListItem.tsx#L25)*

Komponent elementu listy posiłków

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_meallistitem_propsmd)> | Właściwości komponentu |

**Returns:** Element


<a name="modules_components_orderlistitem_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/OrderListItem"

## Module: "components/OrderListItem"

### Index

#### Interfaces

* [Props](#interfaces_components_orderlistitem_propsmd)

#### Functions

* [OrderListItem](#orderlistitem)

### Functions

#### OrderListItem

▸ `Const`**OrderListItem**(`props`: PropsWithChildren\<[Props](#interfaces_components_orderlistitem_propsmd)>): Element

*Defined in [src/components/OrderListItem.tsx:22](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/OrderListItem.tsx#L22)*

Komponent elementu listy zamówień

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_orderlistitem_propsmd)> | Właściwości komponentu |

**Returns:** Element


<a name="modules_components_pagewrapper_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/PageWrapper"

## Module: "components/PageWrapper"

### Index

#### Interfaces

* [Props](#interfaces_components_pagewrapper_propsmd)

#### Functions

* [PageWrapper](#pagewrapper)

### Functions

#### PageWrapper

▸ `Const`**PageWrapper**(`props`: PropsWithChildren\<[Props](#interfaces_components_pagewrapper_propsmd)>): Element

*Defined in [src/components/PageWrapper.tsx:39](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/PageWrapper.tsx#L39)*

Komponent wrappera podstrony

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_pagewrapper_propsmd)> | Właściwości komponentu |

**Returns:** Element


<a name="modules_components_parentdrawer_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/ParentDrawer"

## Module: "components/ParentDrawer"

### Index

#### Interfaces

* [Props](#interfaces_components_parentdrawer_propsmd)

#### Functions

* [ParentDrawer](#parentdrawer)

### Functions

#### ParentDrawer

▸ `Const`**ParentDrawer**(`props`: PropsWithChildren\<[Props](#interfaces_components_parentdrawer_propsmd)>): Element

*Defined in [src/components/ParentDrawer.tsx:21](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/ParentDrawer.tsx#L21)*

Komponent szablonu nagłówka listy

**`component`** 

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | PropsWithChildren\<[Props](#interfaces_components_parentdrawer_propsmd)> | Właściwości komponentu |

**Returns:** Element


<a name="modules_components_userchecker_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "components/UserChecker"

## Module: "components/UserChecker"

### Index

#### Functions

* [UserChecker](#userchecker)

### Functions

#### UserChecker

▸ `Const`**UserChecker**(): null

*Defined in [src/components/UserChecker.tsx:9](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/components/UserChecker.tsx#L9)*

Komponent sprawdzający stan użytkownika

**`component`** 

**Returns:** null


<a name="modules_index_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "index"

## Module: "index"


<a name="modules_pages_addagencypage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/AddAgencyPage"

## Module: "pages/AddAgencyPage"

### Index

#### Functions

* [AddAgencyPage](#addagencypage)

### Functions

#### AddAgencyPage

▸ `Const`**AddAgencyPage**(): Element

*Defined in [src/pages/AddAgencyPage.tsx:18](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/AddAgencyPage.tsx#L18)*

Komponent podstrony dodawania agencji

**`component`** 

**Returns:** Element


<a name="modules_pages_addkidpage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/AddKidPage"

## Module: "pages/AddKidPage"

### Index

#### Functions

* [AddKidPage](#addkidpage)

### Functions

#### AddKidPage

▸ `Const`**AddKidPage**(): Element

*Defined in [src/pages/AddKidPage.tsx:18](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/AddKidPage.tsx#L18)*

Komponent podstrony dodawania podopiecznego

**`component`** 

**Returns:** Element


<a name="modules_pages_addmealpage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/AddMealPage"

## Module: "pages/AddMealPage"

### Index

#### Functions

* [AddMealPage](#addmealpage)

### Functions

#### AddMealPage

▸ `Const`**AddMealPage**(): Element

*Defined in [src/pages/AddMealPage.tsx:19](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/AddMealPage.tsx#L19)*

Komponent podstrony dodawania posiłku

**`component`** 

**Returns:** Element


<a name="modules_pages_addparentkidpage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/AddParentKidPage"

## Module: "pages/AddParentKidPage"

### Index

#### Functions

* [AddParentKidPage](#addparentkidpage)

### Functions

#### AddParentKidPage

▸ `Const`**AddParentKidPage**(): Element

*Defined in [src/pages/AddParentKidPage.tsx:18](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/AddParentKidPage.tsx#L18)*

Komponent podstrony przypisywania dziecka

**`component`** 

**Returns:** Element


<a name="modules_pages_adminstatspage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/AdminStatsPage"

## Module: "pages/AdminStatsPage"

### Index

#### Functions

* [AdminStatsPage](#adminstatspage)

### Functions

#### AdminStatsPage

▸ `Const`**AdminStatsPage**(): Element

*Defined in [src/pages/AdminStatsPage.tsx:53](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/AdminStatsPage.tsx#L53)*

Komponent podstrony statystyk

**`component`** 

**Returns:** Element


<a name="modules_pages_agenciespage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/AgenciesPage"

## Module: "pages/AgenciesPage"

### Index

#### Functions

* [AgenciesPage](#agenciespage)

### Functions

#### AgenciesPage

▸ `Const`**AgenciesPage**(): Element

*Defined in [src/pages/AgenciesPage.tsx:24](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/AgenciesPage.tsx#L24)*

Komponent podstrony listy placówek

**`component`** 

**Returns:** Element


<a name="modules_pages_agencypage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/AgencyPage"

## Module: "pages/AgencyPage"

### Index

#### Functions

* [AgencyPage](#agencypage)

### Functions

#### AgencyPage

▸ `Const`**AgencyPage**(): Element

*Defined in [src/pages/AgencyPage.tsx:53](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/AgencyPage.tsx#L53)*

Komponent podstrony informacji o placówce

**`component`** 

**Returns:** Element


<a name="modules_pages_emptypage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/EmptyPage"

## Module: "pages/EmptyPage"

### Index

#### Functions

* [EmptyPage](#emptypage)

### Functions

#### EmptyPage

▸ `Const`**EmptyPage**(): Element

*Defined in [src/pages/EmptyPage.tsx:16](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/EmptyPage.tsx#L16)*

Komponent pustej podstrony

**`component`** 

**Returns:** Element


<a name="modules_pages_kidspage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/KidsPage"

## Module: "pages/KidsPage"

### Index

#### Functions

* [KidsPage](#kidspage)

### Functions

#### KidsPage

▸ `Const`**KidsPage**(): Element

*Defined in [src/pages/KidsPage.tsx:25](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/KidsPage.tsx#L25)*

Komponent podstrony listy dzieci

**`component`** 

**Returns:** Element


<a name="modules_pages_loginpage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/LoginPage"

## Module: "pages/LoginPage"

### Index

#### Functions

* [LoginPage](#loginpage)

### Functions

#### LoginPage

▸ `Const`**LoginPage**(): Element

*Defined in [src/pages/LoginPage.tsx:45](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/LoginPage.tsx#L45)*

Komponent podstrony logowania

**`component`** 

**Returns:** Element


<a name="modules_pages_logoutpage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/LogoutPage"

## Module: "pages/LogoutPage"

### Index

#### Functions

* [LogoutPage](#logoutpage)

### Functions

#### LogoutPage

▸ `Const`**LogoutPage**(): null

*Defined in [src/pages/LogoutPage.tsx:8](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/LogoutPage.tsx#L8)*

Komponent podstrony wylogowania

**`component`** 

**Returns:** null


<a name="modules_pages_menupage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/MenuPage"

## Module: "pages/MenuPage"

### Index

#### Functions

* [MenuPage](#menupage)

### Functions

#### MenuPage

▸ `Const`**MenuPage**(): Element

*Defined in [src/pages/MenuPage.tsx:56](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/MenuPage.tsx#L56)*

Komponent podstrony jadłospisu

**`component`** 

**Returns:** Element


<a name="modules_pages_orderpage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/OrderPage"

## Module: "pages/OrderPage"

### Index

#### Functions

* [OrderPage](#orderpage)

### Functions

#### OrderPage

▸ `Const`**OrderPage**(): Element

*Defined in [src/pages/OrderPage.tsx:55](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/OrderPage.tsx#L55)*

Komponent podstrony zamówienia

**`component`** 

**Returns:** Element


<a name="modules_pages_orderspage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/OrdersPage"

## Module: "pages/OrdersPage"

### Index

#### Functions

* [OrdersPage](#orderspage)

### Functions

#### OrdersPage

▸ `Const`**OrdersPage**(): Element

*Defined in [src/pages/OrdersPage.tsx:45](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/OrdersPage.tsx#L45)*

Komponent podstrony zamówień

**`component`** 

**Returns:** Element


<a name="modules_pages_parentkidspage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/ParentKidsPage"

## Module: "pages/ParentKidsPage"

### Index

#### Functions

* [ParentKidsPage](#parentkidspage)

### Functions

#### ParentKidsPage

▸ `Const`**ParentKidsPage**(): Element

*Defined in [src/pages/ParentKidsPage.tsx:26](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/ParentKidsPage.tsx#L26)*

Komponent podstrony dzieci rodzica

**`component`** 

**Returns:** Element


<a name="modules_pages_parentorderspage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/ParentOrdersPage"

## Module: "pages/ParentOrdersPage"

### Index

#### Functions

* [ParentOrdersPage](#parentorderspage)

### Functions

#### ParentOrdersPage

▸ `Const`**ParentOrdersPage**(): Element

*Defined in [src/pages/ParentOrdersPage.tsx:47](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/ParentOrdersPage.tsx#L47)*

Komponent podstrony zamówień rodzica

**`component`** 

**Returns:** Element


<a name="modules_pages_placeorderpage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/PlaceOrderPage"

## Module: "pages/PlaceOrderPage"

### Index

#### Functions

* [PlaceOrderPage](#placeorderpage)

### Functions

#### PlaceOrderPage

▸ `Const`**PlaceOrderPage**(): Element

*Defined in [src/pages/PlaceOrderPage.tsx:80](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/PlaceOrderPage.tsx#L80)*

Komponent podstrony składania zamówienia

**`component`** 

**Returns:** Element


<a name="modules_pages_registrypage_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "pages/RegistryPage"

## Module: "pages/RegistryPage"

### Index

#### Functions

* [RegisterPage](#registerpage)

### Functions

#### RegisterPage

▸ `Const`**RegisterPage**(): Element

*Defined in [src/pages/RegistryPage.tsx:44](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/pages/RegistryPage.tsx#L44)*

Komponent podstrony rejestracji

**`component`** 

**Returns:** Element


<a name="modules_serviceworker_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "serviceWorker"

## Module: "serviceWorker"

### Index

#### Functions

* [register](#register)
* [unregister](#unregister)

### Functions

#### register

▸ **register**(`config?`: Config): void

*Defined in [src/serviceWorker.ts:29](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/serviceWorker.ts#L29)*

##### Parameters:

Name | Type |
------ | ------ |
`config?` | Config |

**Returns:** void

___

#### unregister

▸ **unregister**(): void

*Defined in [src/serviceWorker.ts:143](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/serviceWorker.ts#L143)*

**Returns:** void


<a name="modules_setuptests_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "setupTests"

## Module: "setupTests"


<a name="modules_theme_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "theme"

## Module: "theme"

### Index

#### Variables

* [darkTheme](#darktheme)
* [lightTheme](#lighttheme)

### Variables

#### darkTheme

• `Const` **darkTheme**: Theme = createMuiTheme(deepmerge(themeOptions, { palette: { type: 'dark' } }))

*Defined in [src/theme.ts:20](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/theme.ts#L20)*

Ciemny motyw

___

#### lightTheme

• `Const` **lightTheme**: Theme = createMuiTheme(deepmerge(themeOptions, { palette: { type: 'light' } }))

*Defined in [src/theme.ts:17](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/theme.ts#L17)*

Jasny motyw


<a name="modules_utils_authstate_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "utils/authState"

## Module: "utils/authState"

### Index

#### Interfaces

* [AuthState](#interfaces_utils_authstate_authstatemd)

#### Variables

* [AuthProvider](#authprovider)
* [useAuth](#useauth)
* [useSetAuth](#usesetauth)

### Variables

#### AuthProvider

•  **AuthProvider**: FC\<{}>

*Defined in [src/utils/authState.ts:10](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/authState.ts#L10)*

___

#### useAuth

•  **useAuth**: useState

*Defined in [src/utils/authState.ts:10](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/authState.ts#L10)*

___

#### useSetAuth

•  **useSetAuth**: useSetState

*Defined in [src/utils/authState.ts:10](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/authState.ts#L10)*


<a name="modules_utils_datefns_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "utils/dateFns"

## Module: "utils/dateFns"

### Index

#### Functions

* [format](#format)

### Functions

#### format

▸ `Const`**format**(`date`: number \| Date, `dateFormat`: string, `options`: undefined \| { firstWeekContainsDate?: undefined \| number ; locale?: Locale ; useAdditionalDayOfYearTokens?: undefined \| false \| true ; useAdditionalWeekYearTokens?: undefined \| false \| true ; weekStartsOn?: 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6  }): string

*Defined in [src/utils/dateFns.ts:7](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/dateFns.ts#L7)*

Funkcja do formatowania dat z uwzględnieniem polskiej lokalizacji

##### Parameters:

Name | Type |
------ | ------ |
`date` | number \| Date |
`dateFormat` | string |
`options` | undefined \| { firstWeekContainsDate?: undefined \| number ; locale?: Locale ; useAdditionalDayOfYearTokens?: undefined \| false \| true ; useAdditionalWeekYearTokens?: undefined \| false \| true ; weekStartsOn?: 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6  } |

**Returns:** string


<a name="modules_utils_errorhandler_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "utils/errorHandler"

## Module: "utils/errorHandler"

### Index

#### Functions

* [errorHandler](#errorhandler)

### Functions

#### errorHandler

▸ `Const`**errorHandler**(`err`: unknown, `mapper`: (message?: undefined \| string) => string): string

*Defined in [src/utils/errorHandler.ts:5](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/errorHandler.ts#L5)*

Funkcja do obsługi błędów

##### Parameters:

Name | Type |
------ | ------ |
`err` | unknown |
`mapper` | (message?: undefined \| string) => string |

**Returns:** string


<a name="modules_utils_layout_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "utils/layout"

## Module: "utils/layout"


<a name="modules_utils_mappers_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "utils/mappers"

## Module: "utils/mappers"

### Index

#### Functions

* [mealLabelAndIcon](#meallabelandicon)
* [periodLabel](#periodlabel)

### Functions

#### mealLabelAndIcon

▸ `Const`**mealLabelAndIcon**(`mealType`: [MealType](#mealtype)): object

*Defined in [src/utils/mappers.ts:24](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/mappers.ts#L24)*

Funkcja zwracająca etykietę i ikonę dla danego typu posiłku

##### Parameters:

Name | Type |
------ | ------ |
`mealType` | [MealType](#mealtype) |

**Returns:** object

Name | Type |
------ | ------ |
`Icon` | OverridableComponent\<SvgIconTypeMap\<{}, \"svg\">> |
`label` | string |

___

#### periodLabel

▸ `Const`**periodLabel**(`period`: [OrdersPeriod](#ordersperiod)): \"codziennie\" \| \"co miesiąc\" \| \"co semestr\" \| \"co tydzień\"

*Defined in [src/utils/mappers.ts:9](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/mappers.ts#L9)*

Funkcja zwracająca etykietę dla danego okresu zamówienia

##### Parameters:

Name | Type |
------ | ------ |
`period` | [OrdersPeriod](#ordersperiod) |

**Returns:** \"codziennie\" \| \"co miesiąc\" \| \"co semestr\" \| \"co tydzień\"


<a name="modules_utils_state_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "utils/state"

## Module: "utils/state"

### Index

#### Functions

* [createState](#createstate)

### Functions

#### createState

▸ `Const`**createState**\<S>(`initialState`: S, `persistenceKey?`: undefined \| string): [FC\<{}>, useState, useSetState]

*Defined in [src/utils/state.tsx:4](https://github.com/bonioss/Pracownia_Problemowa/blob/0f2d5c6/client/src/utils/state.tsx#L4)*

Funkcja tworząca globalny stan

##### Type parameters:

Name | Type |
------ | ------ |
`S` | object |

##### Parameters:

Name | Type |
------ | ------ |
`initialState` | S |
`persistenceKey?` | undefined \| string |

**Returns:** [FC\<{}>, useState, useSetState]


<a name="modules_utils_types_md"></a>

**[client](#readmemd)**

> [Globals](#globalsmd) / "utils/types"

## Module: "utils/types"

### Index

#### Interfaces

* [FormProps](#interfaces_utils_types_formpropsmd)
* [Stylable](#interfaces_utils_types_stylablemd)

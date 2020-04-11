<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class UserRole extends Enum
{
    const DEV =   'dev';
    const ADMIN =   'admin';
    const SUBADMIN = 'subadmin';
    const CUSTOMER = 'customer';
    const TECHNIQUE = 'technique';
    const GUEST  = 'guest';
}

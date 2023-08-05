using AlMuzainiCMS.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlMuzainiCMS.DAL.Core
{
    public interface IUserCreateRepository
    {
        bool Create(UserInfo userInfo);
        UserInfo GetUsersList(UserInfo userInfo);


    }
}

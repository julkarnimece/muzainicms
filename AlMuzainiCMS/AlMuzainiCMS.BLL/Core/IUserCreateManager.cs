using AlMuzainiCMS.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlMuzainiCMS.BLL.Core
{
    public interface IUserCreateManager
    {

        bool Create(UserInfo userInfo);
        UserInfo GetUsersList(UserInfo userInfo);



    }
}

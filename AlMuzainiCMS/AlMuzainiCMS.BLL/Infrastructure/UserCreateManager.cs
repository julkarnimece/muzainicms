using AlMuzainiCMS.BLL.Core;
using AlMuzainiCMS.DAL.Core;
using AlMuzainiCMS.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlMuzainiCMS.BLL.Infrastructure
{
    public class UserCreateManager : IUserCreateManager
    {
        private readonly IUserCreateRepository _repository;

        public UserCreateManager(IUserCreateRepository repository)
        {
            this._repository = repository;
        }

        public bool Create(UserInfo userInfo)
        {
            return _repository.Create(userInfo);    
        }

        public UserInfo GetUsersList(UserInfo userInfo)
        {
            return _repository.GetUsersList(userInfo);
        }
    }
}

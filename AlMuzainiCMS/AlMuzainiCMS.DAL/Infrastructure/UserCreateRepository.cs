using AlMuzainiCMS.DAL.Core;
using AlMuzainiCMS.DataBaseContext.DatabaseContext;
using AlMuzainiCMS.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlMuzainiCMS.DAL.Infrastructure
{
    public class UserCreateRepository : IUserCreateRepository
    {
        private readonly AlMuzainiCMSDbContext _context;

        public UserCreateRepository(AlMuzainiCMSDbContext context)
        {
            _context = context;
        }



        public bool Create(UserInfo userInfo)
        {
            bool result = false;
            try
            {
                _context.UserInfos.Add(userInfo);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        public UserInfo GetUsersList(UserInfo userInfo)
        {
            var list = _context.UserInfos.Where(u => u.userName == userInfo.userName && u.userPass == userInfo.userPass).FirstOrDefault();
            return list;
        }
    }
}

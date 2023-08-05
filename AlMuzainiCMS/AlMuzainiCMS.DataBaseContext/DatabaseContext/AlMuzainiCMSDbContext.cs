using AlMuzainiCMS.Models.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlMuzainiCMS.DataBaseContext.DatabaseContext
{
    public class AlMuzainiCMSDbContext : DbContext
    {
        public AlMuzainiCMSDbContext(DbContextOptions<AlMuzainiCMSDbContext> options) : base(options)
        {

        }

        public DbSet<UserInfo> UserInfos { get; set; }


    }
}

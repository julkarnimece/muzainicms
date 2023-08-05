using AlMuzainiCMS.Models.LoginVM;
using AlMuzainiCMS.Models.Models;
using AutoMapper;

namespace AlMuzainiCMS.Mapper
{
    public class AutoMapper : Profile
    {
        public AutoMapper()
        {
            CreateMap<UserInfo, UserInfoVM>();
            CreateMap<UserInfoVM, UserInfo>();


        }


    }
}

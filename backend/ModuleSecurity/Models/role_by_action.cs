//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ModuleSecurity.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    
    public partial class role_by_action
    {
        [Key]
        [Required]
        public long id_role_by_action { get; set; }
        [Required]
        public int id_role { get; set; }
        [Required]
        public int id_action { get; set; }
    
        public virtual action action { get; set; }
        public virtual role role { get; set; }
    }
}

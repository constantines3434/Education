//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан по шаблону.
//
//     Изменения, вносимые в этот файл вручную, могут привести к непредвиденной работе приложения.
//     Изменения, вносимые в этот файл вручную, будут перезаписаны при повторном создании кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TestWPF
{
    using System;
    using System.Collections.Generic;
    
    public partial class Tenants
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Tenants()
        {
            this.Rent = new HashSet<Rent>();
        }
    
        public int IdTenant { get; set; }
        public string CompanyName { get; set; }
        public string PhoneNumber { get; set; }
        public string Adress { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Rent> Rent { get; set; }
    }
}

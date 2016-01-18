import Ember from 'ember';

export default Ember.Component.extend({
    errors: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                targynev: this.$('#targynev').val(),
                kurzuskod: this.$('#kurzuskod').val(),
                idopont: this.$('#idopont').val(),
            });
        }
    },
    
    validate() {
        var targynev = this.$('#targynev').val();
        var kurzuskod = this.$('#kurzuskod').val();
        var idopont = this.$('#idopont').val();
        
        this.set('errors.targynev', targynev === '' ? 'Tárgynév kötelező' : '');
        this.set('errors.kurzuskod', kurzuskod === '' ? 'Kurzuskód kötelező' : '');
        this.set('errors.idopont', idopont === '' ? 'Időpont kötelező' : '');
        
        return this.get('errors.targynev') === '' &&
               this.get('errors.kurzuskod') === '' &&
               this.get('errors.idopont') === '';
    }
});

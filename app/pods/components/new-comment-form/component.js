import Ember from 'ember';

export default Ember.Component.extend({
    comments: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                nev: this.$('#nev').val(),
                uzenet: this.$('#uzenet').val(),
            });
        }
    },
    
    validate() {
        var nev = this.$('#nev').val();
        var uzenet = this.$('#uzenet').val();
        
        this.set('comments.nev', nev === '' ? 'Név kötelező' : '');
        this.set('comments.uzenet', uzenet === '' ? 'Hozzászólás kötelező' : '');
        
        return this.get('comments.nev') === '' &&
               this.get('comments.uzenet') === '' ;
    }
});

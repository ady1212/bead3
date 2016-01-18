import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newError(formData) {
            var error = this.store.createRecord(
                'error', 
                Object.assign(
                    {
                        targynev: formData.targynev,
                        kurzuskod: formData.kurzuskod,
                        idopont: formData.idopont
                    }, 
                    formData
                )
            );
            error.save();
            $('.modal').modal('hide');
            //this.transitionToRoute('errors.list');
        }
    }
});

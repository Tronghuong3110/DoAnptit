package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name = "post")
@Entity
public class Post {
    @Id
    private Long id;
    private String courtName;
    private String phoneNumber;
    private String linkFacebook;
    @Column(name = "description", columnDefinition = "text")
    private String description;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "complex_id")
    private Complex complex;
}
